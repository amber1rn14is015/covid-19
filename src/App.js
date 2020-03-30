import React, { Component } from 'react';
//import DoughnutChart from './Components/Charts/DoughnutChart';
import axios from 'axios';
//import HorizontalBarChart from './Components/Charts/HorizontalBarChart';
import NavBar from './Components/Layout/NavBar';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {

  state = {
    jsonData: [],
    places: [],
    confirmed: [],
    cured: [],
    deaths: [],
    newsArticles: [],
    patientInfo: [],
    cases_time_series: []
  }

  UNSAFE_componentWillMount(){
    let jsonData = []
    let newsArticles = []
    let patientInfo = []
    let cases_time_series = []
    let places = []
    let confirmed = []
    let cured = []
    let deaths = []
    axios.get(`/covid-19/data_file.json`)
        .then( response => {
        jsonData = response.data
        jsonData.forEach(element => {
            places.push(element.place)
            confirmed.push(element.confirmed)
            cured.push(element.cured)
            deaths.push(element.death)
        });
        axios.get(`https://newsapi.org/v2/top-headlines?q=COVID&country=in&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&sortBy=publishedAt`)
        .then( response => {
          newsArticles = response.data.articles
          axios.get(`https://api.covid19india.org/raw_data.json`)
          .then( response => {
            patientInfo = response.data.raw_data
            axios.get('https://api.covid19india.org/data.json')
            .then( response => {
                cases_time_series = response.data.cases_time_series
                this.setState({
                  jsonData: jsonData,
                  places: places,
                  confirmed: confirmed,
                  cured: cured,
                  deaths: deaths,
                  newsArticles: newsArticles,
                  patientInfo: patientInfo,
                  cases_time_series: cases_time_series
                })
            }).catch( err => console.log(err))
          }).catch( err => console.log(err))
        }).catch( err => console.log(err))
    }).catch( err => console.log(err))
  }

  render() {
    return (
      <div>
          <BrowserRouter basename={`/covid-19`}>
            <Routes jsonData={this.state.jsonData}
                    places = {this.state.places} 
                    confirmed = {this.state.confirmed}
                    cured = {this.state.cured}
                    deaths = {this.state.deaths}
                    newsArticles = {this.state.newsArticles}
                    patientInfo = {this.state.patientInfo}
                    cases_time_series = {this.state.cases_time_series}  
            />
            <NavBar/>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
