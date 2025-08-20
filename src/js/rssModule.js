export default class RSSModule {
    constructor() {
        this.feeds = {
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
    }

    /**
     * Add new RSS feed for a specific country
     * @param {string} countryCode - Code or country name
     * @param {string} feedUrl - URL of the RSS feed
     */
    addFeed(countryCode, feedUrl) {
        if (!this.feeds[countryCode]) {
            this.feeds[countryCode] = [];
        }
        this.feeds[countryCode].push(feedUrl);
    }

    /**
     * Récupérer les news de tous les flux associés à un pays
     * @param {string} countryCode - Code ou nom du pays
     * @returns {Promise<Array>} Liste d'articles triés du plus récent au plus ancien
     */
    async getNews(countryCode) {
        if (!this.feeds[countryCode]) return [];

        let allArticles = [];

        for (const url of this.feeds[countryCode]) {
            try {
                const articles = await this.fetchRSS(url);
                allArticles.push(...articles);
            } catch (err) {
                console.error(`[RSSModule] Failed to fetch RSS from ${url}`, err);
            }
        }

        // 🔥 Tri décroissant par date
        allArticles.sort((a, b) => {
            const dateA = new Date(a.publishedAt).getTime();
            const dateB = new Date(b.publishedAt).getTime();
            return dateB - dateA; // plus récent d'abord
        });

        return allArticles;
    }


    /**
     * Request + parsing RSS flow
     * @param {string} url - URL
     * @returns {Promise<Array>} Articles
     */
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
}
