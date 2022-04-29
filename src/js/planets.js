// const PLANET_URL = 
// `https://api.le-systeme-solaire.net/rest/bodies/pluto`;
// `https://api.le-systeme-solaire.net/rest/bodies/`;


const planets = {
    "mercury": {
        "url": "https://images.unsplash.com/photo-1614724723656-457e78e0b50b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1117&q=80",
        "info": "Mercury is the smallest planet in our solar system. It's the closest planet to our Sun and a little bigger than Earth's Moon."
    },

    "venus": {
        "url": "https://images.unsplash.com/photo-1630693912525-7a833b62c81f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80",
        "info": "Venus is the second planet from the Sun and Earth's closest planetary neighbor. It's the hottest planet in our Solar System."
    },

    "earth": {
        "url": "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "info": "Our home planet is the third planet from the Sun, and the only place we know of so far that's inhabited by living things. Earth is the only world in our Solar System with liquid water on the surface."   
    },

    "mars": {
        "url": "https://images.unsplash.com/photo-1630694093867-4b947d812bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80",
        "info": "Mars is the fourth planet from the Sun, a dusty, cold, desert world with a very thin atmoshpere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past."   
    },

    "jupiter": {
        "url": "https://images.unsplash.com/photo-1630839437035-dac17da580d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80",
        "info": "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined."   
    },

    "saturn": {
        "url": "https://images.unsplash.com/photo-1637984135921-301a7d39e3b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80",
        "info": "Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Adorned with thousands of beautiful ringlets, Saturn is unique among the planets."   
    },

    "uranus": {
        "url": "https://images.unsplash.com/photo-1639874897442-8b6d5a181cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80",
        "info": "Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star."   
    },

    "neptune": {
        "url": "https://images.unsplash.com/photo-1639921884918-8d28ab2e39a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80",
        "info": "Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. Neptune was first predicted by mathematics before its discovery."   
    }
};




export async function getPlanet(planet) {
    try {
        const PLANET_URL = 
        `https://api.le-systeme-solaire.net/rest/bodies/${planet}`;

        const response =  await fetch(PLANET_URL);
        const planetData = await response.json();

        // clearing container for each call


        // function call


        console.log(planetData);
        // console.log(planets[planet]);
        
    } catch (err) {
        console.error(err);
    }
}

// console.log(planets["Mercury"]);

