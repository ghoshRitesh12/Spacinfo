import { getApod, getSapod } from "./apod.js";
import { getMarsPhoto } from "./mars-rover.js";
import { getAsteroids } from "./asteroids.js";


/*---- Selectors ----*/
export const $ = a => document.querySelector(a);
export const $$ = abc  => document.querySelectorAll(abc);
/*---- End selectors ----*/


/*---- Functions ----*/
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if(e.target.matches(selector))
            callback(e);
    });
}
/*---- End functions ----*/


/*---- Event Listeners ----*/

// for hamburger menu
$('.hamburger').addEventListener('click', e => {
    $('.nav-bar__menu').classList.toggle('toggle--on');
    e.target.classList.toggle('expanded');

    $('body').style.overflowY = 
    ($('body').style.overflowY=="hidden") ? "auto" : "hidden";

    $('.nav-bar__menu--overlay').classList.toggle('on');
});

// for drop-down menu backdrop
addGlobalEventListener('click', '.nav-bar__menu--overlay',
e => {
    e.target.classList.remove('on');
    e.target.previousElementSibling.classList.remove('toggle--on');

    $('.hamburger').classList.remove('expanded');
    $('body').style.overflowY = "auto";
});


// show hd url pop slide on hover
addGlobalEventListener('mouseover','.apod__image--src',
e => {
    $('.apod__image--hdurlsrc').classList.add('hover');
});

addGlobalEventListener('mouseout','.apod__image--src',
e => {
    $('.apod__image--hdurlsrc').classList.remove('hover');
});


// show sapod hd url pop slide on hover
addGlobalEventListener('mouseover','.sapod__image--src',
e => {
    $('.sapod__image--hdurlsrc').classList.add('hover');
});

addGlobalEventListener('mouseout','.sapod__image--src',
e => {
    $('.sapod__image--hdurlsrc').classList.remove('hover');
});


// getting all navigation links
const navlinks = $$('.nav-bar__links');
navlinks.forEach(navlink => {
    navlink.addEventListener('click', e => {
        e.preventDefault();
        navlinks.forEach(navlink => navlink.classList.remove('active'));
        e.target.classList.add('active');

        // for mobile nagivation
        $('.hamburger').classList.remove('expanded');
        $('.nav-bar__menu').classList.remove('toggle--on');
        $('.nav-bar__menu--overlay').classList.remove('on');
        $('body').style.overflowY = "auto";


        // changing the title of the webpage
        $('title').textContent = `Spacinfo | ${e.target.getAttribute('data-title')}`;

        // adding/removing according classes
        $('.root').classList.remove('page__apod', 'page__mars-rover', 'page__asteroids');
        $('.root').classList.add(`page__${e.target.getAttribute('data-title').toLowerCase()}`);
    });
});


// calling getApod() function on page load
window.addEventListener('load', async () => {
    
    // fetching apod information
    await getApod();

    // fetching mars information
    await getMarsPhoto();

    // fetching information for page 3

});

// debouncing sapod request
function debounce (callback, delay = 1000) {
    let timeout;

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(...args);
        }, delay)
    }
}

const updateDebounceDate = debounce(date => {
    getSapod(date);
}, 1000)

// GET SAPOD
$('.sapod__search--date').addEventListener('input', e => {
    const searchedDate = e.target.value;
    updateDebounceDate(searchedDate)
    // getSapod(searchedDate);
});


// getting asteroids for page 3
    // getAsteroids();


    


/*---- End event Listeners ----*/