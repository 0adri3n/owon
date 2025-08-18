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
            const world = await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
            this.worldData = topojson.feature(world, world.objects.countries);
            console.log('[v0] World data loaded successfully');
        } catch (error) {
            console.error('[v0] Error loading world data:', error);
            this.showError('Unable to load world map data');
        }
    }

    setupMap() {
        const container = d3.select('#worldMap');
        const width = container.node().getBoundingClientRect().width;
        const height = 500;

        this.projection = d3.geoNaturalEarth1()
            .scale(width / 6.5)
            .translate([width / 2, height / 2]);

        this.path = d3.geoPath().projection(this.projection);

        this.svg = container.append('svg')
            .attr('width', width)
            .attr('height', height);

        // <CHANGE> Setup zoom with proper scale limits and smooth transitions
        this.zoom = d3.zoom()
            .scaleExtent([1, 8])
            .on('zoom', (event) => {
                this.svg.selectAll('path')
                    .attr('transform', event.transform);
            });

        this.svg.call(this.zoom);

        if (this.worldData) {
            this.drawCountries();
        }
    }

    drawCountries() {
        this.svg.selectAll('.country')
            .data(this.worldData.features)
            .enter()
            .append('path')
            .attr('class', 'country')
            .attr('d', this.path)
            .on('click', (event, d) => {
                console.log('[v0] Country clicked:', d.properties);
                this.selectCountry(d);
            })
            .on('mouseover', (event, d) => {
                const countryName = this.getCountryName(d);
                this.showTooltip(event, countryName);
            })
            .on('mouseout', () => {
                this.hideTooltip();
            });
    }

    selectCountry(countryData) {
        this.svg.selectAll('.country').classed('selected', false);
        this.svg.selectAll('.country')
            .filter(d => d === countryData)
            .classed('selected', true);

        const countryName = this.getCountryName(countryData);
        console.log('[v0] Selected country name:', countryName);
        
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
        statusText.textContent = 'TARGET ACQUIRED';
        statusText.style.color = 'var(--warning-orange)';

        this.loadNews();
    }

    getCountryName(countryData) {
        // <CHANGE> Enhanced country name detection with debug logging
        console.log('[v0] Country properties available:', Object.keys(countryData.properties));
        
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

        console.log('[v0] Detected country name:', countryName);

        // Fallback if no name found
        if (!countryName) {
            countryName = 'Unknown Region';
            console.log('[v0] No country name found, using fallback');
        }

        return countryName;
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
            'Tunisia': 'tn'
        };

        const countryName = this.getCountryName(countryData);
        const code = countryCodes[countryName] || 'us';
        console.log('[v0] Country code for', countryName, ':', code);
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
            console.error('[v0] Error loading news:', error);
            this.showNewsError();
        } finally {
            loading.classList.add('hidden');
            newsContainer.classList.remove('hidden');
        }
    }

    async fetchNews() {
        // <CHANGE> Updated API key placeholder and demo data
        const apiKey = 'YOUR_API_KEY';
        
        if (apiKey === 'YOUR_API_KEY') {
            return this.getDemoNews();
        }

        const country = this.selectedCountry.code;
        const language = this.currentLanguage;
        
        let url;
        if (this.currentSource === 'local') {
            url = `https://newsapi.org/v2/top-headlines?country=${country}&language=${language}&apiKey=${apiKey}`;
        } else {
            url = `https://newsapi.org/v2/everything?q=${this.selectedCountry.name}&language=${language}&sortBy=publishedAt&apiKey=${apiKey}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        
        if (data.status === 'error') {
            throw new Error(data.message);
        }
        
        return data.articles || [];
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
            background: rgba(0,0,0,0.9);
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