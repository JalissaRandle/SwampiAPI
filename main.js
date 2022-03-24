// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

// const { response } = require("express");

// const { default: axios } = require("axios");

const button = document.querySelector("#button")
console.log(button)

 const getplanets =()=> axios.get('https://swapi.dev/api/planets/').then(res =>{
     res.data.results.foreach(planet => createPlanetCard(planet))
 })
function buttonclick (button) {
    console.log('button click')
}
// let baseURL = 'https://swapi.dev/api/'

axios({
    method:'post',
    url: 'https://swapi.dev/api/planets/',
    data: {
        name:'alderaan'
    }
})


// const fetchPlanets = () => {
//     axios.get ('https://swapi.dev/api/planets/')
//         .then(response => {
//             const planet = response.data.data;
//             console.log(`get planet list`, planets)
//         })
//         .catch(error => console.error(error));
// }
// fetchPlanets();
    // .then (res => {
    //     res.data.array.foreach(plan => buttonclick)
    // })
// }
//     // clearPlanets()

// //     axios.post(`${baseURL}/planets/?search=alderaan)
// //         .then (res => {
// //          res.data.array.forEach(plan => buttonclick)
// // })}



button.addEventListener('click', buttonclick)
