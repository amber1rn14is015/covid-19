import React from 'react'
import {Line} from 'react-chartjs-2'


const TimeSeriesChart = (props) => {

    var data = {
        datasets: [{
            fill: true,
            label: props.label,
            data: props.data,
            backgroundColor: "#f2aba5",
            borderColor: "#e02312",
            pointBorderColor: "#e02312",
            pointBackgroundColor: "#fff",
            xAxisID: 'date'
        }]
    }

    var options = {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                id: 'date',
                type: 'time',
                time: { parser: "DD MMMM" },
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: "Date",
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: props.labelString,
                }
            }]
        }
    }

    // console.log(createDataList(props.cases_time_series))
    return(
        <div>
            <Line
                data={data}
                options={options}
            />
        </div>
    )
}

export default TimeSeriesChart