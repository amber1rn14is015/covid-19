//const fs = require('fs')
const axios = require('axios')
//const jsonData = JSON.parse(fs.readFileSync('./data_file.json', 'utf-8'))
//let jsonData = []

let places = []
let positiveIN = []
let positiveFN = []
let cured = []
let deaths = []


axios.get('./data_file.json')
    .then( response => {
        let jsonData = response.data
        jsonData.forEach(element => {
            places.push(element.place)
            positiveIN.push(element.positiveIN)
            positiveFN.push(element.positiveFN)
            cured.push(element.cured)
            deaths.push(element.death)
        });
        export {
            places,
            positiveIN,
            positiveFN,
            cured,
            deaths
        }
    })
    .catch( err => console.log(err))

// const getPlaces = async function(){
//     await getData()
//     let places = []
//     jsonData.forEach((element) => {
//         places.push(element.place)
//     })
//     return places
// }

// const getPositiveIN = function (){
//     let positiveIN = []
//     jsonData.forEach((element) => {
//         positiveIN.push(element.place)
//     })
//     return positiveIN
// }

// const getPositiveFN = function (){
//     let positiveFN = []
//     jsonData.forEach((element) => {
//         positiveFN.push(element.place)
//     })
//     return positiveFN
// }

// const getCured = function (){
//     let cured = []
//     jsonData.forEach((element) => {
//         cured.push(element.place)
//     })
//     return cured
// }

// const getDeath = function (){
//     let deaths = []
//     jsonData.forEach((element) => {
//         deaths.push(element.place)
//     })
//     return deaths
// }

// export {
//     getPlaces, 
//     getPositiveIN, 
//     getPositiveFN, 
//     getCured, 
//     getDeath
// }

