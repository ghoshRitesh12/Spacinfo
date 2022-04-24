import { API_KEY } from "./apikey.js";

const start_date = "2021-04-01"
const end_date = "2021-04-05"
// const ASTEROID_URL = 
// `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start_date}&end_date=${end_date}&api_key=${API_KEY}`;

const URL = 
`https://api.le-systeme-solaire.net/rest/bodies/mars`;
export async function getAsteroids() {
    try {
        const response =  await fetch(URL);
        const asteroidData = await response.json();
        console.log(asteroidData);
    } catch (err) {
        console.error(err);
    }
}

