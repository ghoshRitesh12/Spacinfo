import { API_KEY } from "./apikey.js";

// const ASTEROID_URL = 
// `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${API_KEY}`;

// const PLANET_URL = 
// `https://api.le-systeme-solaire.net/rest/bodies/pluto`;
// `https://api.le-systeme-solaire.net/rest/bodies/`;

export async function getPlanet(planet) {
    try {
        // planet = 'mercury';
        const PLANET_URL = 
        `https://api.le-systeme-solaire.net/rest/bodies/${planet}`;

        const response =  await fetch(PLANET_URL);
        const planetData = await response.json();
        console.log(planetData);
        
    } catch (err) {
        console.error(err);
    }
}

