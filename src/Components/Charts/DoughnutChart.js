import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = (props) => {
    const data = {
        labels: props.places,
        legend: {
            display: true,
        },
        datasets: [{
            label: "Statewise positive cases",
            data: props.confirmed,
            backgroundColor: [
                        '#FFF1C9',
                        '#F7B7A3',
                        '#EA5F89',
                        '#FB13F3',
                        '#57167E',
                        '#FED60A',
                        '#44FF07',
                        '#FB0007',
                        '#9A73B2',
                        '#734DFF',
                        '#A6A370',
                        '#F29FB8',
                        '#FBDFE7',
                        '#B57085',
                        '#F47A1F',
                        '#FDBB2F',
                        '#377B2B',
                        '#7AC142',
                        '#FABD8F',
                        '#FEDD97',
                        '#9BBD95',
                        '#E6F69D',
                        '#AADEA7',
                        '#64C2A6',
                        '#F13C59',
                        '#42f5ef',
                        '#d64595',
                        '#e1e6dc',
                        '#ad9b7f'
                    ],
            borderWidth: 1
        }]
    }
    return(   
        <div style={{
            minWidth: "340px",
            minHeight: "340px"
        }}>
            <Doughnut
                data = {data}
                options = {{maintainAspectRatio: false, responsive: true, legend:{display: false}}}
            />
        </div>
    )
}

export default DoughnutChart;

// scales: {
//     yAxes: [{
//         ticks: {
//             beginAtZero: true
//         }
//     }]
// }