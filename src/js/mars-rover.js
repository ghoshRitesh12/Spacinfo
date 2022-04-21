import { API_KEY } from "./apod.js";

const EXO_URL = 
``;

// const MARS_URL = 
// `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key=${API_KEY}`;

const MARS_URL = 
`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mahli&api_key=${API_KEY}`;
export async function getMarsPhoto() {
    try {
        // const response = await fetch(MARS_URL);
        const marsData = await response.json();
        console.log(marsData);
    } catch (error) {
        console.error(error);
    }
}