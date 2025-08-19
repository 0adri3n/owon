class GlobeRecon {
    constructor() {
        this.selectedCountry = null;
        this.currentSource = 'local';
        this.currentLanguage = 'en';
        this.svg = null;
        this.projection = null;
        this.path = null;
        this.worldData = null;
        this.zoom = null;
        
        this.init();
    }

    async init() {
        await this.loadWorldData();
        this.setupMap();
        this.setupEventListeners();
        this.setupNewsFilters();
    }

    async loadWorldData() {
        try {
        // Utilisation des données TopoJSON pour la carte du monde
        const world = await d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
        this.worldData = topojson.feature(world, world.objects.countries)

        this.addGazaStrip()
        } catch (error) {
        console.error("Error loading map data:", error)
        this.showError("Unable to load world map")
        }
    }

    addGazaStrip() {
        // Gaza Strip coordinates (approximate boundaries)
        const gazaCoordinates = [
            [
                [34.550, 31.650], // Northwest - côte Méditerranée
                [34.530, 31.550], // Nord-Est
                [34.330, 31.220], // Sud-Est (frontière Égypte)
                [34.300, 31.250], // Sud-Ouest (frontière Égypte, côté mer)
                [34.200, 31.550]  // Retour au Nord-Ouest
            ],
        ];


        const gazaFeature = {
        type: "Feature",
        properties: {
            NAME: "Gaza Strip",
            name: "Gaza Strip",
            ADMIN: "Palestine",
            ISO_A2: "PS",
            custom: true,
        },
        geometry: {
            type: "Polygon",
            coordinates: gazaCoordinates,
        },
        }

        // Add Gaza to the world data
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

        // Dessin des pays
        if (this.worldData) {
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

        this.updateLabels()
    }

    
    updateLabels() {
        const scale = this.currentTransform.k

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
            const baseSize = Math.max(12, Math.min(16, Math.sqrt(area) * 0.1))
            return `${baseSize / scale}px`
        })
    }

    selectCountry(countryData) {
        this.svg.selectAll('.country').classed('selected', false);
        this.svg.selectAll('.country')
            .filter(d => d === countryData)
            .classed('selected', true);

        const countryName = this.getCountryName(countryData);
        console.log('[GlobalRecon] Selected country name:', countryName);

        const region = this.getCountryRegion(countryData);
        console.log('[GlobalRecon] Selected country region:', region);
    
        
        this.selectedCountry = {
            name: countryName,
            code: this.getCountryCode(countryData),
            data: countryData
        };

        // <CHANGE> Update UI with TARGET ACQUIRED status
        document.getElementById('selectedCountry').textContent = countryName;
        document.getElementById('newsTitle').textContent = `INTEL BRIEFING - ${countryName.toUpperCase()}`;
        
        // Update briefing status
        const statusText = document.querySelector('.briefing-status span:last-child');
        statusText.textContent = 'COUNTRY ACQUIRED';
        statusText.style.color = 'var(--warning-orange)';

        this.loadNews();
    }

    getCountryName(countryData) {
        // <CHANGE> Enhanced country name detection with debug logging
        console.log('[GlobalRecon] Country properties available:', Object.keys(countryData.properties));
        
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
                if (
                    name &&
                    (name.includes("Palestine") || name.includes("West Bank") || name.includes("Gaza"))
                    ) {
                    return "Palestine"
                }
                countryName = name.trim();
                break;
            }
        }

        console.log('[GlobalRecon] Detected country name:', countryName);

        // Fallback if no name found
        if (!countryName) {
            countryName = 'Unknown Region';
            console.log('[GlobalRecon] No country name found, using fallback');
        }


        return countryName;
    }

    getCountryRegion(countryData) {
        console.log('[GlobalRecon] Country properties available for region:', Object.keys(countryData.properties));

        const possibleRegions = [
            countryData.properties.CONTINENT,
            countryData.properties.continent,
            countryData.properties.REGION_UN,
            countryData.properties.region_un,
            countryData.properties.SUBREGION,
            countryData.properties.subregion
        ];

        for (const region of possibleRegions) {
            console.log(region)
            if (region && typeof region === 'string' && region.trim()) {
                return region.trim();
            }
        }

        return 'Unknown Region';
    }


    getCountryCode(countryData) {
        // <CHANGE> Enhanced country code mapping with more countries
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
        if (
            countryName &&
            (countryName.includes("Israel") || countryName.includes("Palestine") || countryName.includes("West Bank") || countryName.includes("Gaza"))
            ) {
            return "ps"
        }
        const code = countryCodes[countryName] || 'us';
        console.log('[GlobalRecon] Country code for', countryName, ':', code);
        return code;
    }

    async loadNews() {
        if (!this.selectedCountry) return;

        const newsContainer = document.getElementById('newsContainer');
        const loading = document.getElementById('loadingNews');
        
        newsContainer.classList.add('hidden');
        loading.classList.remove('hidden');

        try {
            const news = await this.fetchNews();
            this.displayNews(news);
        } catch (error) {
            console.error('[GlobalRecon] Error loading news:', error);
            this.showNewsError();
        } finally {
            loading.classList.add('hidden');
            newsContainer.classList.remove('hidden');
        }
    }

    // async fetchNews() {
    //     // <CHANGE> Updated API key placeholder and demo data
    //     const apiKey = 'YOUR_API_KEY';
        
    //     if (apiKey === 'YOUR_API_KEY') {
    //         return this.getDemoNews();
    //     }

    //     const country = this.selectedCountry.code;
    //     const language = this.currentLanguage;
        
    //     let url;
    //     if (this.currentSource === 'local') {
    //         url = `https://newsapi.org/v2/top-headlines?country=${country}&language=${language}&apiKey=${apiKey}`;
    //     } else {
    //         url = `https://newsapi.org/v2/everything?q=${this.selectedCountry.name}&language=${language}&sortBy=publishedAt&apiKey=${apiKey}`;
    //     }

    //     const response = await fetch(url);
    //     const data = await response.json();
        
    //     if (data.status === 'error') {
    //         throw new Error(data.message);
    //     }
        
    //     return data.articles || [];
    // }

    async fetchNews() {
        // Si un flux RSS est configuré pour le pays sélectionné, on le prend
        console.log(this.selectedCountry)
        if (this.selectedCountry?.name === 'Palestine') { // Palestine par ex.
            return await this.fetchRSS('https://globalvoices.org/-/world/middle-east-north-africa/palestine/feed/');
        }

        // Sinon, on garde ton système existant (NewsAPI ou démo)
        return this.getDemoNews();
    }

    async fetchRSS(feedUrl) {
        try {
            // Utilisation du proxy pour contourner CORS
            const proxyUrl = 'https://corsproxy.io/?';
            const fetchUrl = `${proxyUrl}${encodeURIComponent(feedUrl)}`;

            const response = await fetch(fetchUrl);
            const data = await response.text();

            // Parser le XML
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");
            const items = xmlDoc.querySelectorAll("item");

            console.log(items)

            // Convertir en tableau d'articles compatible displayNews
            const articles = Array.from(items).map(item => ({
                title: item.querySelector("title")?.textContent || "No title",
                description: item.querySelector("description")?.textContent || "No description",
                url: item.querySelector("link")?.textContent || "#",
                source: { name: item.querySelector("source")?.textContent || "RSS Feed" },
                publishedAt: item.querySelector("pubDate")?.textContent || new Date().toISOString()
            }));

            // Appeler displayNews pour injecter dans le DOM
            return articles
        } catch (error) {
            console.error('Error fetching the RSS feed:', error);
            // Si erreur, afficher message vide
            return []
        }
    }



    getDemoNews() {
        // <CHANGE> Updated demo news with intelligence theme
        return [
            {
                title: `Intelligence Report: ${this.selectedCountry.name} Regional Analysis`,
                description: "This is a demonstration intelligence briefing. To access real-time intelligence data, configure your NewsAPI key in the script.js file.",
                url: "#",
                source: { name: "GlobeRecon Intel" },
                publishedAt: new Date().toISOString(),
                urlToImage: "/placeholder.svg?height=100&width=200"
            },
            {
                title: `Strategic Assessment: Recent Developments in ${this.selectedCountry.name}`,
                description: "Another demonstration briefing showing how intelligence reports would be displayed with a configured API connection.",
                url: "#",
                source: { name: "Field Operations" },
                publishedAt: new Date(Date.now() - 3600000).toISOString(),
                urlToImage: "/placeholder.svg?height=100&width=200"
            },
            {
                title: `Threat Analysis: ${this.selectedCountry.name} Security Overview`,
                description: "Comprehensive security briefing and threat assessment for the selected operational theater.",
                url: "#",
                source: { name: "Threat Intel Division" },
                publishedAt: new Date(Date.now() - 7200000).toISOString(),
                urlToImage: "/placeholder.svg?height=100&width=200"
            }
        ];
    }

    displayNews(articles) {
        const container = document.getElementById('newsContainer');
        
        if (!articles || articles.length === 0) {
            container.innerHTML = `
                <div class="welcome-message">
                    <div class="welcome-icon">📡</div>
                    <h4>NO INTELLIGENCE AVAILABLE</h4>
                    <p>No intelligence data found for ${this.selectedCountry.name} in the selected language protocol.</p>
                </div>
            `;
            return;
        }

        const newsHTML = articles.map(article => `
            <div class="news-item" onclick="window.open('${article.url}', '_blank')">
                <h4>${article.title}</h4>
                <p>${article.description || 'No description available'}</p>
                <div class="news-meta">
                    <span class="news-source">${article.source.name}</span>
                    <span>${this.formatDate(article.publishedAt)}</span>
                </div>
            </div>
        `).join('');

        container.innerHTML = newsHTML;
    }

    showNewsError() {
        const container = document.getElementById('newsContainer');
        container.innerHTML = `
            <div class="welcome-message">
                <div class="welcome-icon">⚠️</div>
                <h4>INTELLIGENCE SYSTEM ERROR</h4>
                <p>Unable to establish secure connection to intelligence networks. Check your API configuration and network status.</p>
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

    setupEventListeners() {
        // <CHANGE> Enhanced zoom reset with smooth transition
        document.getElementById('resetZoom').addEventListener('click', () => {
            this.svg.transition()
                .duration(750)
                .call(this.zoom.transform, d3.zoomIdentity);
                  this.updateLabels()
        });

        document.getElementById('languageSelect').addEventListener('change', (e) => {
            this.currentLanguage = e.target.value;
            if (this.selectedCountry) {
                this.loadNews();
            }
        });
    }

    setupNewsFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                this.currentSource = btn.dataset.source;
                
                if (this.selectedCountry) {
                    this.loadNews();
                }
            });
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
}

// <CHANGE> Initialize GlobeRecon system
document.addEventListener('DOMContentLoaded', () => {
    new GlobeRecon();
});