async function fetchGeolocation() {
    const fetch = (await import('node-fetch')).default;
    try {
        const response = await fetch('https://api.ipgeolocation.io/ipgeo?apiKey=' + process.env.GEO_API_KEY);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching geolocation');
    }
}

module.exports = { fetchGeolocation };
