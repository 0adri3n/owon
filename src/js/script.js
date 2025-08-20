import RSSModule from './rssModule.js';

class owon {
    constructor() {

        this.rss = new RSSModule();

        // --------------------------------------------------
        // OPEN SECTION : PROPOSE RSS FEEDS HERE !
        this.rss.addFeed("France", "https://www.france24.com/en/france/rss");
        // -----------------------------------------

        this.selectedCountry = null;
        this.currentLanguage = 'en';
        this.svg = null;
        this.projection = null;
        this.path = null;
        this.worldData = null;
        this.zoom = null;
        this.countriesList = [];
        
        this.init();
    }

    async init() {
        await this.loadWorldData();
        this.initializeClock()
        this.initializeHeaderRSSFeed()
        this.initializeSearch()
        this.setupMap();
    }

    async loadWorldData() {
        try {
            const world = await d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json")
            this.worldData = topojson.feature(world, world.objects.countries)
            this.addGazaStrip()
        } catch (error) {
            console.error("Error loading map data:", error)
            this.showError("Unable to load world map")
        }
    }

    addGazaStrip() {
        const gazaCoordinates = [
            [
                [34.550, 31.650], 
                [34.530, 31.550], 
                [34.330, 31.220], 
                [34.300, 31.250], 
                [34.200, 31.550]  
            ],
        ];


        const gazaFeature = {
        type: "Feature",
        properties: {
            NAME: "Palestine",
            name: "Palestine",
            ADMIN: "Palestine",
            ISO_A2: "PS",
            custom: true,
        },
        geometry: {
            type: "Polygon",
            coordinates: gazaCoordinates,
        },
        }

        this.worldData.features.push(gazaFeature)
    }

    setupMap() {
        const container = d3.select("#worldMap")
        const width = container.node().getBoundingClientRect().width
        const height = 500

        // Configuration de la projection
        this.projection = d3
        .geoNaturalEarth1()
        .scale(width / 6.5)
        .translate([width / 2, height / 2])

        this.path = d3.geoPath().projection(this.projection)

        // Création du SVG
        this.svg = container.append("svg").attr("width", width).attr("height", height)

        this.countriesGroup = this.svg.append("g").attr("class", "countries-group")
        this.labelsGroup = this.svg.append("g").attr("class", "labels-group")

        // Ajout du zoom
        const zoom = d3
        .zoom()
        .scaleExtent([1, 70])
        .on("zoom", (event) => {
            this.currentTransform = event.transform
            this.countriesGroup.attr("transform", event.transform)
            this.labelsGroup.attr("transform", event.transform)
            this.updateLabels()
        })

        this.svg.call(zoom)

        this.currentTransform = d3.zoomIdentity;


        // Dessin des pays
        if (this.worldData) {
            this.buildCountriesList()
            this.drawCountries()
            this.drawCountryLabels()
        }
    }

    drawCountries() {
        this.countriesGroup
        .selectAll(".country")
        .data(this.worldData.features)
        .enter()
        .append("path")
        .attr("class", "country")
        .attr("d", this.path)
        .on("click", (event, d) => {
            this.selectCountry(d)
        })
        .on("mouseover", (event, d) => {
            const countryName = this.getCountryName(d)
            this.showTooltip(event, countryName)
        })
        .on("mouseout", () => {
            this.hideTooltip()
        })
    }

    drawCountryLabels() {
        this.labelsGroup
        .selectAll(".country-label")
        .data(this.worldData.features)
        .enter()
        .append("text")
        .attr("class", "country-label")
        .attr("x", (d) => {
            const centroid = this.path.centroid(d)
            return centroid[0]
        })
        .attr("y", (d) => {
            const centroid = this.path.centroid(d)
            return centroid[1]
        })
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .text((d) => this.getCountryName(d))
        .style("pointer-events", "none")

        // Don't ask me why but France Label is placed on Spain lol
        const franceLabel = document.querySelector('#worldMap > svg > g.labels-group > text:nth-child(44)');
        if (franceLabel.textContent == "France") {
            franceLabel.textContent = ""
        }
        this.updateLabels()

    }

    initializeClock() {
        const updateClock = () => {
        const now = new Date()
        const timeString = now.toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        })
        const dateString = now.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
        })

        const clockElement = document.getElementById("clock")
        const dateElement = document.getElementById("date")

        if (clockElement) clockElement.textContent = timeString
        if (dateElement) dateElement.textContent = dateString
        }

        updateClock()
        setInterval(updateClock, 1000)
    }

    async initializeHeaderRSSFeed() {
        try {
        const rssUrl = "https://feeds.bbci.co.uk/news/world/rss.xml"
        const proxyUrl = "https://corsproxy.io/?"
        const fetchUrl = `${proxyUrl}${encodeURIComponent(rssUrl)}`

        const response = await fetch(fetchUrl)
        const data = await response.text()

        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(data, "application/xml")
        const items = xmlDoc.querySelectorAll("item")

        const headlines = []
        for (const item of Array.from(items).slice(0, 10)) {
            const title = item.querySelector("title")?.textContent || ""
            if (title) headlines.push(title)
        }

        if (headlines.length > 0) {
            const tickerContent = document.getElementById("tickerContent")
            if (tickerContent) {
            tickerContent.textContent = headlines.join(" • ")
            }
        }
        } catch (error) {
        console.error("Error loading RSS feed:", error)
        const tickerContent = document.getElementById("tickerContent")
        if (tickerContent) {
            tickerContent.textContent =
            "Welcome to Owon - Your World News Explorer • Stay informed with global stories • Click any country to explore local news"
        }
        }
    }
    
    updateLabels() {
        const scale = (this.currentTransform && this.currentTransform.k) ? this.currentTransform.k : 1;

        this.labelsGroup
        .selectAll(".country-label")
        .style("opacity", (d) => {
            // Show labels based on country size and zoom level
            const bounds = this.path.bounds(d)
            const area = (bounds[1][0] - bounds[0][0]) * (bounds[1][1] - bounds[0][1])
            const minArea = 500 / (scale * scale) // Adjust threshold based on zoom
            return area > minArea ? Math.min(1, scale * 0.5) : 0
        })
        .style("font-size", (d) => {
            // Adjust font size based on zoom and country size
            const bounds = this.path.bounds(d)
            const area = (bounds[1][0] - bounds[0][0]) * (bounds[1][1] - bounds[0][1])
            const baseSize = Math.max(12, Math.min(14, Math.sqrt(area) * 0.1))
            return `${baseSize / scale}px`
        })
    }

    selectCountry(countryData) {
        this.svg.selectAll('.country').classed('selected', false);
        this.svg.selectAll('.country')
            .filter(d => d === countryData)
            .classed('selected', true);

        const countryName = this.getCountryName(countryData);
        console.log('[owon] Selected country name:', countryName);

        const region = this.getCountryRegion(countryData);    
        
        this.selectedCountry = {
            name: countryName,
            code: this.getCountryCode(countryData),
            data: countryData
        };

        // Update UI with TARGET ACQUIRED status
        document.getElementById('selectedCountry').textContent = countryName;
        document.getElementById('newsTitle').textContent = ` News about ${countryName}`;
    

        this.loadNews();
    }

    getCountryName(countryData) {
        // Enhanced country name detection with debug logging
        // Try multiple possible property names
        const possibleNames = [
            countryData.properties.NAME,
            countryData.properties.name,
            countryData.properties.NAME_EN,
            countryData.properties.NAME_LONG,
            countryData.properties.ADMIN,
            countryData.properties.sovereignt,
            countryData.properties.name_en
        ];

        let countryName = null;
        for (const name of possibleNames) {
            if (name && typeof name === 'string' && name.trim()) {
                countryName = name.trim();
                break;
            }
        }

        // Fallback if no name found
        if (!countryName) {
            countryName = 'Unknown Region';
        }

        return countryName;
    }

    getCountryRegion(countryData) {

        const possibleRegions = [
            countryData.properties.CONTINENT,
            countryData.properties.continent,
            countryData.properties.REGION_UN,
            countryData.properties.region_un,
            countryData.properties.SUBREGION,
            countryData.properties.subregion
        ];

        for (const region of possibleRegions) {
            if (region && typeof region === 'string' && region.trim()) {
                return region.trim();
            }
        }

        return 'Unknown Region';
    }


    getCountryCode(countryData) {
        // Enhanced country code mapping with more countries
        const countryCodes = {
            'United States of America': 'us',
            'United States': 'us',
            'United Kingdom': 'gb',
            'France': 'fr',
            'Germany': 'de',
            'Spain': 'es',
            'Italy': 'it',
            'Japan': 'jp',
            'Brazil': 'br',
            'India': 'in',
            'Canada': 'ca',
            'Australia': 'au',
            'China': 'cn',
            'Russia': 'ru',
            'Russian Federation': 'ru',
            'Mexico': 'mx',
            'Argentina': 'ar',
            'South Africa': 'za',
            'Egypt': 'eg',
            'Turkey': 'tr',
            'South Korea': 'kr',
            'Netherlands': 'nl',
            'Belgium': 'be',
            'Switzerland': 'ch',
            'Austria': 'at',
            'Sweden': 'se',
            'Norway': 'no',
            'Denmark': 'dk',
            'Finland': 'fi',
            'Poland': 'pl',
            'Portugal': 'pt',
            'Greece': 'gr',
            'Ireland': 'ie',
            'Czech Republic': 'cz',
            'Hungary': 'hu',
            'Romania': 'ro',
            'Bulgaria': 'bg',
            'Croatia': 'hr',
            'Serbia': 'rs',
            'Ukraine': 'ua',
            'Belarus': 'by',
            'Lithuania': 'lt',
            'Latvia': 'lv',
            'Estonia': 'ee',
            'Slovakia': 'sk',
            'Slovenia': 'si',
            'Israel': 'il',
            'Saudi Arabia': 'sa',
            'United Arab Emirates': 'ae',
            'Thailand': 'th',
            'Vietnam': 'vn',
            'Malaysia': 'my',
            'Singapore': 'sg',
            'Indonesia': 'id',
            'Philippines': 'ph',
            'New Zealand': 'nz',
            'Chile': 'cl',
            'Peru': 'pe',
            'Colombia': 'co',
            'Venezuela': 've',
            'Nigeria': 'ng',
            'Kenya': 'ke',
            'Morocco': 'ma',
            'Algeria': 'dz',
            'Tunisia': 'tn',
            "West Bank": "ps",
            "Gaza Strip": "ps",
        };

        const countryName = this.getCountryName(countryData);
        const code = countryCodes[countryName] || 'fr';
        return code;
    }

    async loadNews() {
        if (!this.selectedCountry) return;

        const newsContainer = document.getElementById('newsContainer');
        const loading = document.getElementById('loadingNews');
        
        newsContainer.classList.add('hidden');
        loading.classList.remove('hidden');

        try {
            const news = await this.rss.getNews(this.selectedCountry.name);
            this.displayNews(news);
        } catch (error) {
            console.error('[owon] Error loading news:', error);
            this.showNewsError();
        } finally {
            loading.classList.add('hidden');
            newsContainer.classList.remove('hidden');
        }
    }


    displayNews(articles) {
        const container = document.getElementById('newsContainer');
        
        if (!articles || articles.length === 0) {
            container.innerHTML = `
                <div class="welcome-message">
                    <div class="welcome-icon">📡</div>
                    <h4>NO DATA AVAILABLE</h4>
                    <p>No data found for ${this.selectedCountry.name}.</p>
                </div>
            `;
            return;
        }

        const newsHTML = articles.map(article => `
            <div class="news-item" onclick="window.open('${article.url}', '_blank')">
                <h4>${article.title}</h4>
                <p>${article.description || 'No description available'}</p>
                <div class="news-meta">
                    <span class="news-source">${article.source.name || "Can't"}</span>
                    <span>${this.formatDate(article.publishedAt)}</span>
                </div>
            </div>
        `).join('');

        container.innerHTML = newsHTML;
        const newsTitle = document.getElementById('newsTitle');
        newsTitle.scrollIntoView({
            behavior: "smooth",  
            block: "start"
        });

    }

    showNewsError() {
        const container = document.getElementById('newsContainer');
        container.innerHTML = `
            <div class="welcome-message">
                <div class="welcome-icon">⚠️</div>
                <h4>SYSTEM ERROR</h4>
                <p>Unable to establish connection to news flow. Check network status.</p>
            </div>
        `;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString(this.currentLanguage === 'fr' ? 'fr-FR' : 'en-US', {
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    showTooltip(event, text) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = text;
        tooltip.style.cssText = `
            position: absolute;
            background: #c77dff;
            color: var(--terminal-green);
            padding: 0.5rem;
            border-radius: 4px;
            font-size: 0.8rem;
            pointer-events: none;
            z-index: 1000;
            left: ${event.pageX + 10}px;
            top: ${event.pageY - 30}px;
            border: 1px solid var(--terminal-green);
            box-shadow: 0 0 10px var(--glow-color);
        `;
        document.body.appendChild(tooltip);
    }

    hideTooltip() {
        const tooltip = document.querySelector('.tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }

    showError(message) {
        const container = document.getElementById('worldMap');
        container.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #ef4444;">
                <div style="text-align: center;">
                    <h3>SYSTEM ERROR</h3>
                    <p>${message}</p>
                </div>
            </div>
        `;
    }

    buildCountriesList() {
        this.countriesList = this.worldData.features
        .map((d) => ({
            name: this.getCountryName(d),
            data: d,
        }))
        .sort((a, b) => a.name.localeCompare(b.name))
    }

    initializeSearch() {
        const searchInput = document.getElementById("countrySearch")
        const searchResults = document.getElementById("searchResults")

        if (!searchInput || !searchResults) return

        searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim()

        if (query.length < 2) {
            searchResults.classList.add("hidden")
            return
        }

        const filteredCountries = this.countriesList
            .filter((country) => country.name.toLowerCase().includes(query))
            .slice(0, 8) // Limit to 8 results

        if (filteredCountries.length > 0) {
            searchResults.innerHTML = filteredCountries
            .map(
                (country) => `
                        <div class="search-result-item" data-country="${country.name}">
                            ${country.name}
                        </div>
                    `,
            )
            .join("")
            searchResults.classList.remove("hidden")

            // Add click handlers to search results
            searchResults.querySelectorAll(".search-result-item").forEach((item) => {
            item.addEventListener("click", () => {
                const countryName = item.dataset.country
                const countryData = this.countriesList.find((c) => c.name === countryName)
                if (countryData) {
                this.selectCountry(countryData.data)
                searchInput.value = countryName
                searchResults.classList.add("hidden")
                }
            })
            })
        } else {
            searchResults.innerHTML = '<div class="search-result-item">No countries found</div>'
            searchResults.classList.remove("hidden")
        }
        })

        // Hide search results when clicking outside
        document.addEventListener("click", (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.add("hidden")
        }
        })
    }

}

// Initialize owon system
document.addEventListener('DOMContentLoaded', () => {
    new owon();
});