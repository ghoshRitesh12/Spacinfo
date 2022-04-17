// "use strict";

import { getApod, getSapod } from "./apod.js";
import { getAsteroids } from "./asteroids.js";


/*---- Selectors ----*/
export const $ = a => document.querySelector(a);
export const $$ = abc  => document.querySelectorAll(abc);
/*---- End selectors ----*/

// router file
// route();

/*---- Functions ----*/
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if(e.target.matches(selector))
            callback(e);
    });
}

/*---- End functions ----*/

/*---- Event Listeners ----*/
$('.hamburger').addEventListener('click', e => {
    $('.nav-bar__menu').classList.toggle('toggle--on');
    e.target.classList.toggle('expanded');

    $('body').style.overflowY = 
    ($('body').style.overflowY=="hidden") ? "auto" : "hidden";

    $('.nav-bar__menu--overlay').classList.toggle('on');
});

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

// $('title').textContent = "Spacinfo | Mars=Rover";


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



getApod();


// GET SAPOD
let requests = 0;
$('.sapod__search--date').addEventListener('input', e => {
    const searchedDate = e.target.value;

    if(requests>0)
        getSapod(searchedDate, true);
    else
        getSapod(searchedDate, false);

    requests++;
})



/*---- End Spa Routing Setup ----*/



/*---- End event Listeners ----*/