const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs');

let dataObj = {}
let data = []

const getStatsData = () => {
    axios.get('https://www.mohfw.gov.in/')
    .then( response => {
        const $ = cheerio.load(response.data)
        $("#cases > div > div > table > tbody > tr")
            .each((index, element)=>{
                    if(index < $("#cases > div > div > table > tbody > tr").length-1){
                        const id = $($(element).find("td")[0]).text()
                        const place = $($(element).find("td")[1]).text()
                        const confirmed = $($(element).find("td")[2]).text()
                        const cured = $($(element).find("td")[3]).text()
                        const death = $($(element).find("td")[4]).text()
                        dataObj = {id, place, confirmed, cured, death}
                        data.push(dataObj)
                    }
            })
            return data
    })
    .then( data => {
        fs.writeFile('../public/data_file.json', JSON.stringify(data, null, 4), (err)=> {
            if(err)
                console.log("Error", err)
            else{
                console.log("Data written successfully at")
            }
        })
    })
    .catch( error => console.log(error))
}

getStatsData()

