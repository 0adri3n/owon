class owon {
    constructor() {

        this.rssFeeds = {
            'Afghanistan': ['https://globalvoices.org/-/world/central-asia-caucasus/afghanistan/feed/'],
            'Albania': ['https://globalvoices.org/-/world/eastern-central-europe/albania/feed/'],
            'Algeria': ['https://globalvoices.org/-/world/middle-east-north-africa/algeria/feed/'],
            'Angola': ['https://globalvoices.org/-/world/sub-saharan-africa/angola/feed/'],
            'Antarctica': ['https://globalvoices.org/-/world/western-europe/austria/feed/'],
            'Argentina': ['https://globalvoices.org/-/world/latin-america/argentina/feed/'],
            'Armenia': ['https://globalvoices.org/-/world/central-asia-caucasus/armenia/feed/'],
            'Australia': ['https://globalvoices.org/-/world/oceania/australia/feed/'],
            'Austria': ['https://globalvoices.org/-/world/western-europe/austria/feed/'],
            'Azerbaijan': ['https://globalvoices.org/-/world/central-asia-caucasus/azerbaijan/feed/'],
            'Bahamas': ['https://globalvoices.org/-/world/caribbean/bahamas/feed/'],
            'Bangladesh': ['https://globalvoices.org/-/world/south-asia/bangladesh/feed/'],
            'Belarus': ['https://globalvoices.org/-/world/eastern-central-europe/belarus/feed/'],
            'Belgium': ['https://globalvoices.org/-/world/western-europe/belgium/feed/'],
            'Belize': ['https://globalvoices.org/-/world/caribbean/belize/feed/'],
            'Benin': ['https://globalvoices.org/-/world/sub-saharan-africa/benin/feed/'],
            'Bhutan': ['https://globalvoices.org/-/world/south-asia/bhutan/feed/'],
            'Bolivia': ['https://globalvoices.org/-/world/latin-america/bolivia/feed/'],
            'Bosnia and Herz.': ['https://globalvoices.org/-/world/eastern-central-europe/bosnia-herzegovina/feed/'],
            'Botswana': ['https://globalvoices.org/-/world/sub-saharan-africa/botswana/feed/'],
            'Brazil': ['https://globalvoices.org/-/world/latin-america/brazil/feed/'],
            'Brunei': ['https://globalvoices.org/-/world/east-asia/brunei/feed/'],
            'Bulgaria': ['https://globalvoices.org/-/world/eastern-central-europe/bulgaria/feed/'],
            'Burkina Faso': ['https://globalvoices.org/-/world/sub-saharan-africa/burkina-faso/feed/'],
            'Burundi': ['https://globalvoices.org/-/world/sub-saharan-africa/burundi/feed/'],
            'Cambodia': ['https://globalvoices.org/-/world/east-asia/cambodia/feed/'],
            'Cameroon': ['https://globalvoices.org/-/world/sub-saharan-africa/cameroon/feed/'],
            'Canada': ['https://globalvoices.org/-/world/north-america/canada/feed/'],
            'Central African Rep.': ['https://globalvoices.org/-/world/sub-saharan-africa/central-african-republic/feed/'],
            'Chad': ['https://globalvoices.org/-/world/sub-saharan-africa/chad/feed/'],
            'Chile': ['https://globalvoices.org/-/world/latin-america/chile/feed/'],
            'China': ['https://globalvoices.org/-/world/east-asia/china/feed/'],
            'Colombia': ['https://globalvoices.org/-/world/latin-america/colombia/feed/'],
            'Congo': ['https://globalvoices.org/-/world/sub-saharan-africa/togo/feed/'],
            'Costa Rica': ['https://globalvoices.org/-/world/latin-america/costa-rica/feed/'],
            'Croatia': ['https://globalvoices.org/-/world/eastern-central-europe/croatia/feed/'],
            'Cuba': ['https://globalvoices.org/-/world/latin-america/cuba/feed/'],
            'Cyprus': ['https://globalvoices.org/-/world/western-europe/cyprus/feed/'],
            'Czechia': ['https://globalvoices.org/-/world/east-asia/china/feed/'],
            "Côte d'Ivoire": ['https://globalvoices.org/-/world/sub-saharan-africa/cote-divoire/feed/'],
            'Dem. Rep. Congo': ['https://globalvoices.org/-/world/sub-saharan-africa/dr-of-congo/feed/'],
            'Denmark': ['https://globalvoices.org/-/world/western-europe/denmark/feed/'],
            'Djibouti': ['https://globalvoices.org/-/world/sub-saharan-africa/djibouti/feed/'],
            'Dominican Rep.': ['https://globalvoices.org/-/world/latin-america/dominican-republic/feed/'],
            'Ecuador': ['https://globalvoices.org/-/world/latin-america/ecuador/feed/'],
            'Egypt': ['https://globalvoices.org/-/world/middle-east-north-africa/egypt/feed/'],
            'El Salvador': ['https://globalvoices.org/-/world/latin-america/el-salvador/feed/'],
            'Eq. Guinea': ['https://globalvoices.org/-/world/sub-saharan-africa/guinea/feed/'],
            'Eritrea': ['https://globalvoices.org/-/world/sub-saharan-africa/eritrea/feed/'],
            'Estonia': ['https://globalvoices.org/-/world/eastern-central-europe/estonia/feed/'],
            'Ethiopia': ['https://globalvoices.org/-/world/sub-saharan-africa/ethiopia/feed/'],
            'Falkland Is.': ['https://globalvoices.org/-/world/sub-saharan-africa/somaliland/feed/'],
            'Fiji': ['https://globalvoices.org/-/world/oceania/fiji/feed/'],
            'Finland': ['https://globalvoices.org/-/world/western-europe/finland/feed/'],
            'Fr. S. Antarctic Lands': ['https://globalvoices.org/-/world/south-asia/sri-lanka/feed/'],
            'France': ['https://globalvoices.org/-/world/western-europe/france/feed/'],
            'Gabon': ['https://globalvoices.org/-/world/sub-saharan-africa/gabon/feed/'],
            'Gambia': ['https://globalvoices.org/-/world/sub-saharan-africa/gambia/feed/'],
            'Georgia': ['https://globalvoices.org/-/world/central-asia-caucasus/georgia/feed/'],
            'Germany': ['https://globalvoices.org/-/world/western-europe/germany/feed/'],
            'Ghana': ['https://globalvoices.org/-/world/sub-saharan-africa/ghana/feed/'],
            'Greece': ['https://globalvoices.org/-/world/western-europe/greece/feed/'],
            'Greenland': ['https://globalvoices.org/-/world/western-europe/ireland/feed/'],
            'Guatemala': ['https://globalvoices.org/-/world/latin-america/guatemala/feed/'],
            'Guinea': ['https://globalvoices.org/-/world/sub-saharan-africa/guinea/feed/'],
            'Guinea-Bissau': ['https://globalvoices.org/-/world/sub-saharan-africa/guinea-bissau/feed/'],
            'Guyana': ['https://globalvoices.org/-/world/caribbean/guyana/feed/'],
            'Haiti': ['https://globalvoices.org/-/world/caribbean/haiti/feed/'],
            'Honduras': ['https://globalvoices.org/-/world/latin-america/honduras/feed/'],
            'Hungary': ['https://globalvoices.org/-/world/eastern-central-europe/hungary/feed/'],
            'Iceland': ['https://globalvoices.org/-/world/western-europe/iceland/feed/'],
            'India': ['https://globalvoices.org/-/world/south-asia/india/feed/'],
            'Indonesia': ['https://globalvoices.org/-/world/east-asia/indonesia/feed/'],
            'Iran': ['https://globalvoices.org/-/world/middle-east-north-africa/iran/feed/'],
            'Iraq': ['https://globalvoices.org/-/world/middle-east-north-africa/iraq/feed/'],
            'Ireland': ['https://globalvoices.org/-/world/western-europe/ireland/feed/'],
            'Israel': ['https://globalvoices.org/-/world/middle-east-north-africa/israel/feed/'],
            'Italy': ['https://globalvoices.org/-/world/western-europe/italy/feed/'],
            'Jamaica': ['https://globalvoices.org/-/world/caribbean/jamaica/feed/'],
            'Japan': ['https://globalvoices.org/-/world/east-asia/japan/feed/'],
            'Jordan': ['https://globalvoices.org/-/world/middle-east-north-africa/jordan/feed/'],
            'Kazakhstan': ['https://globalvoices.org/-/world/central-asia-caucasus/kazakhstan/feed/'],
            'Kenya': ['https://globalvoices.org/-/world/sub-saharan-africa/kenya/feed/'],
            'Kosovo': ['https://globalvoices.org/-/world/eastern-central-europe/kosovo/feed/'],
            'Kuwait': ['https://globalvoices.org/-/world/middle-east-north-africa/kuwait/feed/'],
            'Kyrgyzstan': ['https://globalvoices.org/-/world/central-asia-caucasus/kyrgyzstan/feed/'],
            'Laos': ['https://globalvoices.org/-/world/east-asia/laos/feed/'],
            'Latvia': ['https://globalvoices.org/-/world/eastern-central-europe/latvia/feed/'],
            'Lebanon': ['https://globalvoices.org/-/world/middle-east-north-africa/lebanon/feed/'],
            'Lesotho': ['https://globalvoices.org/-/world/sub-saharan-africa/lesotho/feed/'],
            'Liberia': ['https://globalvoices.org/-/world/sub-saharan-africa/liberia/feed/'],
            'Libya': ['https://globalvoices.org/-/world/middle-east-north-africa/libya/feed/'],
            'Lithuania': ['https://globalvoices.org/-/world/eastern-central-europe/lithuania/feed/'],
            'Luxembourg': ['https://globalvoices.org/-/world/western-europe/luxembourg/feed/'],
            'Macedonia': ['https://globalvoices.org/-/world/eastern-central-europe/macedonia/feed/'],
            'Madagascar': ['https://globalvoices.org/-/world/sub-saharan-africa/madagascar/feed/'],
            'Malawi': ['https://globalvoices.org/-/world/sub-saharan-africa/malawi/feed/'],
            'Malaysia': ['https://globalvoices.org/-/world/east-asia/malaysia/feed/'],
            'Mali': ['https://globalvoices.org/-/world/sub-saharan-africa/mali/feed/'],
            'Mauritania': ['https://globalvoices.org/-/world/sub-saharan-africa/mauritania/feed/'],
            'Mexico': ['https://globalvoices.org/-/world/latin-america/mexico/feed/'],
            'Moldova': ['https://globalvoices.org/-/world/eastern-central-europe/moldova/feed/'],
            'Mongolia': ['https://globalvoices.org/-/world/central-asia-caucasus/mongolia/feed/'],
            'Montenegro': ['https://globalvoices.org/-/world/eastern-central-europe/montenegro/feed/'],
            'Morocco': ['https://globalvoices.org/-/world/middle-east-north-africa/morocco/feed/'],
            'Mozambique': ['https://globalvoices.org/-/world/sub-saharan-africa/mozambique/feed/'],
            'Myanmar': ['https://globalvoices.org/-/world/east-asia/myanmar-burma/feed/'],
            'N. Cyprus': ['https://globalvoices.org/-/world/western-europe/cyprus/feed/'],
            'Namibia': ['https://globalvoices.org/-/world/sub-saharan-africa/namibia/feed/'],
            'Nepal': ['https://globalvoices.org/-/world/south-asia/nepal/feed/'],
            'Netherlands': ['https://globalvoices.org/-/world/western-europe/netherlands/feed/'],
            'New Caledonia': ['https://globalvoices.org/-/world/oceania/new-caledonia/feed/'],
            'New Zealand': ['https://globalvoices.org/-/world/oceania/new-zealand/feed/'],
            'Nicaragua': ['https://globalvoices.org/-/world/latin-america/nicaragua/feed/'],
            'Niger': ['https://globalvoices.org/-/world/sub-saharan-africa/niger/feed/'],
            'Nigeria': ['https://globalvoices.org/-/world/sub-saharan-africa/nigeria/feed/'],
            'North Korea': ['https://globalvoices.org/-/world/east-asia/north-korea/feed/'],
            'Norway': ['https://globalvoices.org/-/world/western-europe/norway/feed/'],
            'Oman': ['https://globalvoices.org/-/world/middle-east-north-africa/oman/feed/'],
            'Pakistan': ['https://globalvoices.org/-/world/south-asia/pakistan/feed/'],
            'Palestine': ['https://globalvoices.org/-/world/middle-east-north-africa/palestine/feed/'],
            'Panama': ['https://globalvoices.org/-/world/latin-america/panama/feed/'],
            'Papua New Guinea': ['https://globalvoices.org/-/world/oceania/papua-new-guinea/feed/'],
            'Paraguay': ['https://globalvoices.org/-/world/latin-america/paraguay/feed/'],
            'Peru': ['https://globalvoices.org/-/world/latin-america/peru/feed/'],
            'Philippines': ['https://globalvoices.org/-/world/east-asia/philippines/feed/'],
            'Poland': ['https://globalvoices.org/-/world/eastern-central-europe/poland/feed/'],
            'Portugal': ['https://globalvoices.org/-/world/western-europe/portugal/feed/'],
            'Puerto Rico': ['https://globalvoices.org/-/world/latin-america/puerto-rico-us/feed/'],
            'Qatar': ['https://globalvoices.org/-/world/middle-east-north-africa/qatar/feed/'],
            'Romania': ['https://globalvoices.org/-/world/eastern-central-europe/romania/feed/'],
            'Russia': ['https://globalvoices.org/-/world/eastern-central-europe/russia/feed/'],
            'Rwanda': ['https://globalvoices.org/-/world/sub-saharan-africa/rwanda/feed/'],
            'S. Sudan': ['https://globalvoices.org/-/world/sub-saharan-africa/sudan/feed/'],
            'Saudi Arabia': ['https://globalvoices.org/-/world/middle-east-north-africa/saudi-arabia/feed/'],
            'Senegal': ['https://globalvoices.org/-/world/sub-saharan-africa/senegal/feed/'],
            'Serbia': ['https://globalvoices.org/-/world/eastern-central-europe/serbia/feed/'],
            'Sierra Leone': ['https://globalvoices.org/-/world/sub-saharan-africa/sierra-leone/feed/'],
            'Slovakia': ['https://globalvoices.org/-/world/eastern-central-europe/slovakia/feed/'],
            'Slovenia': ['https://globalvoices.org/-/world/eastern-central-europe/slovenia/feed/'],
            'Solomon Is.': ['https://globalvoices.org/-/world/oceania/solomon-islands/feed/'],
            'Somalia': ['https://globalvoices.org/-/world/sub-saharan-africa/somalia/feed/'],
            'Somaliland': ['https://globalvoices.org/-/world/sub-saharan-africa/somaliland/feed/'],
            'South Africa': ['https://globalvoices.org/-/world/sub-saharan-africa/south-africa/feed/'],
            'South Korea': ['https://globalvoices.org/-/world/east-asia/south-korea/feed/'],
            'Spain': ['https://globalvoices.org/-/world/western-europe/spain/feed/'],
            'Sri Lanka': ['https://globalvoices.org/-/world/south-asia/sri-lanka/feed/'],
            'Sudan': ['https://globalvoices.org/-/world/sub-saharan-africa/sudan/feed/'],
            'Suriname': ['https://globalvoices.org/-/world/caribbean/suriname/feed/'],
            'Sweden': ['https://globalvoices.org/-/world/western-europe/sweden/feed/'],
            'Switzerland': ['https://globalvoices.org/-/world/western-europe/switzerland/feed/'],
            'Syria': ['https://globalvoices.org/-/world/middle-east-north-africa/syria/feed/'],
            'Taiwan': ['https://globalvoices.org/-/world/east-asia/thailand/feed/'],
            'Tajikistan': ['https://globalvoices.org/-/world/central-asia-caucasus/tajikistan/feed/'],
            'Tanzania': ['https://globalvoices.org/-/world/sub-saharan-africa/tanzania/feed/'],
            'Thailand': ['https://globalvoices.org/-/world/east-asia/thailand/feed/'],
            'Timor-Leste': ['https://globalvoices.org/-/world/east-asia/east-timor/feed/'],
            'Togo': ['https://globalvoices.org/-/world/sub-saharan-africa/togo/feed/'],
            'Trinidad and Tobago': ['https://globalvoices.org/-/world/caribbean/trinidad-tobago/feed/'],
            'Tunisia': ['https://globalvoices.org/-/world/middle-east-north-africa/tunisia/feed/'],
            'Turkey': ['https://globalvoices.org/-/world/middle-east-north-africa/turkey/feed/'],
            'Turkmenistan': ['https://globalvoices.org/-/world/central-asia-caucasus/turkmenistan/feed/'],
            'Uganda': ['https://globalvoices.org/-/world/sub-saharan-africa/uganda/feed/'],
            'Ukraine': ['https://globalvoices.org/-/world/eastern-central-europe/ukraine/feed/'],
            'United Arab Emirates': ['https://globalvoices.org/-/world/middle-east-north-africa/united-arab-emirates/feed/'],
            'United Kingdom': ['https://globalvoices.org/-/world/western-europe/united-kingdom/feed/'],
            'United States of America': ['https://globalvoices.org/-/world/middle-east-north-africa/united-arab-emirates/feed/'],
            'Uruguay': ['https://globalvoices.org/-/world/latin-america/uruguay/feed/'],
            'Uzbekistan': ['https://globalvoices.org/-/world/central-asia-caucasus/uzbekistan/feed/'],
            'Vanuatu': ['https://globalvoices.org/-/world/oceania/vanuatu/feed/'],
            'Venezuela': ['https://globalvoices.org/-/world/latin-america/venezuela/feed/'],
            'Vietnam': ['https://globalvoices.org/-/world/east-asia/vietnam/feed/'],
            'W. Sahara': ['https://globalvoices.org/-/world/middle-east-north-africa/western-sahara/feed/'],
            'Yemen': ['https://globalvoices.org/-/world/middle-east-north-africa/yemen/feed/'],
            'Zambia': ['https://globalvoices.org/-/world/sub-saharan-africa/zambia/feed/'],
            'Zimbabwe': ['https://globalvoices.org/-/world/sub-saharan-africa/zimbabwe/feed/'],
            'eSwatini': ['https://globalvoices.org/-/world/sub-saharan-africa/swaziland/feed/']
        };

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
        // <text class="country-label" x="304" y="172.5" text-anchor="middle" dominant-baseline="middle" style="pointer-events: none; opacity: 1; font-size: 0.430762px;">France</text>
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
            const newX = 237.5;
            const newY = 190;
            franceLabel.setAttribute("x", newX);
            franceLabel.setAttribute("y", newY);
        }
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

    async fetchNews() {
        var cName = this.selectedCountry.name
        if (cName in this.rssFeeds) {
            var allNews = [];
            for (var index in this.rssFeeds[cName]){
                var rssUrl = this.rssFeeds[cName][index]
                var news = await this.fetchRSS(rssUrl);
                allNews.push(...news)
            }
            return allNews
        }

        return this.getDemoNews();
    }

    async fetchRSS(feedUrl) {
        try {
            const proxyUrl = 'https://corsproxy.io/?';
            const fetchUrl = `${proxyUrl}${encodeURIComponent(feedUrl)}`;

            const response = await fetch(fetchUrl);
            const data = await response.text();

            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");
            const items = xmlDoc.querySelectorAll("item");

            let articles = [];

            for (const item of Array.from(items)) {
                articles.push({
                    title: item.querySelector("title")?.textContent || "No title",
                    description: item.querySelector("description")?.textContent || "No description",
                    url: item.querySelector("link")?.textContent || "#",
                    source: { name: item.querySelector("source")?.textContent || "RSS Feed" },
                    publishedAt: item.querySelector("pubDate")?.textContent || new Date().toISOString()
                });
            }

            return articles
        } catch (error) {
            console.error('Error fetching the RSS feed:', error);
            return []
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
}

// Initialize owon system
document.addEventListener('DOMContentLoaded', () => {
    new owon();
});