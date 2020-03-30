import React from 'react'
import TimeSeriesChart from '../../../Charts/TimeSeriesChart'

let property = ""

const createDataList = (cases_time_series) => {
    return cases_time_series.map( (element) => {
        return {'x': element.date.trim(), 'y': element[property]}
    })
}

const changeProperty = (value) => {
    property = value;
}

const TimeSeries = (props) => {

    return(
        <div>
            {changeProperty("dailyconfirmed")}
            <TimeSeriesChart data={createDataList(props.cases_time_series)} labelString={"Cases Confirmed Daily"} label={"Confirmed Cases"}/>
            {changeProperty("totalconfirmed")}
            <TimeSeriesChart data={createDataList(props.cases_time_series)} labelString={"Total Cases Confirmed"} label={"Total Confirmed"}/>
            {changeProperty("dailydeceased")}
            <TimeSeriesChart data={createDataList(props.cases_time_series)} labelString={"Cases Deceased Daily"} label={"Deceased Cases"}/>
            {changeProperty("totaldeceased")}
            <TimeSeriesChart data={createDataList(props.cases_time_series)} labelString={"Total Cases Deceased"} label={"Total Deceased"}/>
            {changeProperty("dailyrecovered")}
            <TimeSeriesChart data={createDataList(props.cases_time_series)} labelString={"Cases Recovered Daily"} label={"Recovered Cases"}/>
            {changeProperty("totalrecovered")}
            <TimeSeriesChart data={createDataList(props.cases_time_series)} labelString={"Total Cases Recovered"} label={"Total Recovered"}/>
        </div>
    )
}

export default TimeSeries