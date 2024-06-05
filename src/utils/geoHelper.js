const fetchGeolocation = async (ip) => {
    const fetch = (await import('node-fetch')).default;
    const apiKey = process.env.GEO_API_KEY;
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  
  module.exports = { fetchGeolocation };
  