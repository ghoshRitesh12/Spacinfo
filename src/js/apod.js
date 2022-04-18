const $ = a => document.querySelector(a);
const $$ = abc  => document.querySelectorAll(abc);

export const API_KEY = 'vYQfJQy4vInZSIgNWhuQvlKeE3phIWj6pbLJyJ4J';
const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

// for customized date
// const date = "2003-05-14"
// const APOD_URL = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`;


function modifyDate(inputDate) {
    const month = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    const d = new Date(inputDate);
    const newDate = 
    `on ${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

    return newDate;
}

const skeletonDate =
`
    <div class="skeleton skeleton-apod__date">
        on 12 July, 2018
    </div> 
`;


const skeletonExplanation = 
`
    <div class="skeleton skeleton-explanation"> </div>
    <div class="skeleton skeleton-explanation"></div>
    <div class="skeleton skeleton-explanation"></div>
    <div class="skeleton skeleton-explanation"></div>
    <div class="skeleton skeleton-explanation"></div>
    <div class="skeleton skeleton-explanation"></div>
    <div class="skeleton skeleton-explanation"></div>
    <div class="skeleton skeleton-explanation"></div>
    <div class="skeleton skeleton-explanation"></div>
    <div class="skeleton skeleton-explanation"></div>
    <div class="skeleton skeleton-explanation"></div>
    <div class="skeleton skeleton-explanation"></div>
    <div class="skeleton skeleton-explanation"></div>
    <div class="skeleton skeleton-explanation"></div>
    <div class="skeleton skeleton-explanation"></div>
`;

const skeletonTitle = 
`
    <div class="skeleton skeleton-apod__title"></div>
    <div class="skeleton skeleton-apod__title"></div>
`;


async function createApod (apiData) {
    try {
        // cloning <template>
        const apodWrap = $('#apod__template').content.cloneNode(true).children[0];


        // for topic title
        const apodTopicTitle = apodWrap.querySelector('.apod__topic--title');
        apodTopicTitle.classList.add('skeleton', 'skeleton-apod__topic--title');

        // date, img src & hdurl
        const dateInfo = modifyDate(apiData.date);
        const date = apodWrap.querySelector('.apod__date');
        date.innerHTML = `${skeletonDate}`;

        // for setting sapod date
        $('.sapod__search--date').value =  apiData.date;

        // for img source
        const imgSrc = apodWrap.querySelector('.apod__image--src');
        imgSrc.src = apiData.url;

        apodWrap.querySelector('.apod__image--hdurlsrc').href = apiData.hdurl;
        apodWrap.querySelector('.apod__info--hdurl').href = apiData.hdurl;

        // copyright
        const copyrightData =  (apiData.copyright)? `© ${apiData.copyright}` : `© NASA`;
        const copyright = apodWrap.querySelector('.apod__image--copyright');
        copyright.innerHTML = 
        `<div class="skeleton skeleton-apod__copyright"> ${copyrightData} </div>`;

        // for title
        const titleData = apiData.title
        const title = apodWrap.querySelector('.apod__info--title');
        title.innerHTML = `${skeletonTitle}`;

        // for explanation
        const explanationData = apiData.explanation;
        const explanation = apodWrap.querySelector('.apod__info--explanation');
        explanation.innerHTML = `${skeletonExplanation}`;


        // appending cloned <template> to page container
        await $('.apod__container').append(apodWrap);
            
        // for exiting skeleton loading, once the image loads
        imgSrc.addEventListener("load", e => {
            e.target.parentElement.classList.remove('skeleton','skeleton-image');
            explanation.innerHTML = '';
            explanation.textContent = explanationData;
            
            title.innerHTML = '';
            title.textContent = titleData;
            
            apodTopicTitle.classList.remove('skeleton', 'skeleton-apod__topic--title');
            
            date.innerHTML = '';
            date.textContent = dateInfo;

            copyright.innerHTML =  '';
            copyright.textContent = copyrightData;

        });
    }
    
    catch (error) {
        console.log(error);
    }
}



export async function getApod() {
    try {
        const response = await fetch(APOD_URL);
        const apodData = await response.json();
        createApod(apodData);

    } catch (err) {
        console.error(err);
    }
}

/*---- Event Listeners ----*/





// SAPOD ASYNC API FETCH

function createSapod (respData) {

    // cloning <sapod> template
    const sapodWrap = $('#sapod__template').content.cloneNode(true).children[0];

    // for date
    $('.sapod__search--date').value = respData.date;

    // for sapod image source
    const imageSrc = sapodWrap.querySelector('.sapod__image--src');
    imageSrc.src = respData.url;

    sapodWrap.querySelector('.sapod__image--hdurlsrc').href = respData.hdurl;
    sapodWrap.querySelector('.sapod__info--hdurl').href = respData.hdurl;

    // sapod title,
    const titleData = respData.title;
    const title = sapodWrap.querySelector('.sapod__info--title');
    title.innerHTML = `${skeletonTitle}`;

    // explanation,
    const explanationData = respData.explanation;
    const explanation = sapodWrap.querySelector('.sapod__info--explanation');
    explanation.innerHTML = `${skeletonExplanation}`

    // copyright
    const copyrightData =  (respData.copyright)? `© ${respData.copyright}` : `© NASA`;
    const copyright = sapodWrap.querySelector('.sapod__image--copyright');
    copyright.innerHTML = 
    `<div class="skeleton skeleton-apod__copyright"> ${copyrightData} </div>`;


    // erasing the previous value
    $('.sapod--info__container').innerHTML = '';
    
    // appending cloned <template> to sapod info container
    $('.sapod--info__container').append(sapodWrap);

    // for existing skeleton loading, once the image loads
    imageSrc.addEventListener('load', e => {
        e.target.parentElement.classList.remove('skeleton','skeleton-image');
        explanation.innerHTML = '';
        explanation.textContent = explanationData;
        
        title.innerHTML = '';
        title.textContent = titleData;
        
        copyright.innerHTML =  '';
        copyright.textContent = copyrightData;
    });
}


export const getSapod = async (keyDate, bool) => {
    try {
        const SAPOD_URL = `https://api.nasa.gov/planetary/apod?date=${keyDate}&api_key=${API_KEY}`;

        const response = await fetch(SAPOD_URL);
        const sapodData = await response.json();
        createSapod(sapodData, bool);
        
    } catch (err) {
        console.error(err);
    }
}








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











/*
I maybe pulling data from 3 API's of NASA
    1. APOD (done)
    2. Asteroids - NeoWs (done)
    3. Exoplanet Archive
    4. (not sure)
*/