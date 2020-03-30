import React from 'react'
import {Route, Switch} from 'react-router-dom'
import AppBar from './Components/Layout/AppBar';
import Home from './Components/Pages/Home/home'
import News from './Components/Pages/News/news'
import Info from './Components/Pages/Info/info'
import QNA from './Components/Pages/QNA/qna'

const Routes = (props) => {
    return(
        <AppBar>
            <Switch>
                <Route path="/" exact component={() => <Home {...props}/>}/>
                <Route path="/news" exact component={() => <News newsArticles={props.newsArticles}/>}/>
                <Route path="/qna" exact component={QNA}/>
                <Route path="/info" exact component={() => <Info cases_time_series={props.cases_time_series} patientInfo={props.patientInfo}/>}/>
            </Switch>
        </AppBar>
    )
}

export default Routes