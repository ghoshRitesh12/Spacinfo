import { $ } from "./index.js";
import { modifyDate } from "./apod.js";
import { API_KEY } from "./apikey.js";


const empty = 
`<li class="mars-rover__items mars-404"> 
    Oops, looks like the photo list you searched 
    for isn't present at this moment, 
    please navigate back to the previous list
</li>`;

// preservence rover :-
// `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=${API_KEY}`

 
// curiosity_rover :- 
// `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?page=${page}&api_key=${API_KEY}`;


const createCards = (resp) => {
    // cloning <li template>
    const cardWrap = $('#mars-rover__template--list').content.cloneNode(true).children[0];


    // image source
    const imageSrc = cardWrap.querySelector('.mars-rover__card--header--img-src');
    imageSrc.src = resp.img_src;

    // photo id
    const photoID = cardWrap.querySelector('.photo-id');
    photoID.textContent = resp.id;

    // for earth and mars date
    const earthDate = cardWrap.querySelector('.earth-date');
    earthDate.textContent = modifyDate(resp.earth_date);
    const marsDate = cardWrap.querySelector('.mars-date');
    marsDate.textContent = resp.sol;

    // for rover name & status
    const roverName = cardWrap.querySelector('.rover-name');
    roverName.textContent = resp.rover.name;
    const roverStatus = cardWrap.querySelector('.rover-status');
    roverStatus.textContent = `[${resp.rover.status}]`;
    if(resp.rover.status !== "active")
        roverStatus.style.color = "#ff407c";

    // for full image link
    const fullImageLink = cardWrap.querySelector('.full-image');
    fullImageLink.href = resp.img_src;

    // appending <li> cards created to <ul>
    $('.mars-rover__list').append(cardWrap);  
};

export async function getMarsPhoto(page=1) {
    try {
        // perseverance rover
        const MARS_URL = 
        `https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?page=${page}&api_key=${API_KEY}`;


        const response = await fetch(MARS_URL);
        const data = await response.json();
        const marsData = data.latest_photos;

        // clearing the <ul> before creating cards
        $('.mars-rover__list').innerHTML = '';

        // check for no photos?
        if(!marsData.length) {
            $('.mars-rover__list').innerHTML = empty;
        }


        marsData.forEach(item => {     
            createCards(item);
        });

    } catch (error) {
        console.error(error);
    }
}

