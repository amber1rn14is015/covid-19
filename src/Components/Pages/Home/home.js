import React, {useState} from 'react'
import DoughnutChart from '../../Charts/DoughnutChart'
import HorizontalBarChart from '../../Charts/HorizontalBarChart'
//import VirtualizedTable from '../../Widgets/Table/virtualizedTable'
import SimpleTable from '../../Widgets/Table/simpleTable'
import { Typography } from '@material-ui/core'
import styles from './home.module.css'
import { withRouter } from 'react-router-dom'
import CustomTab from '../../Widgets/Tab/tab'


const Home = (props) => {
    const [tab, setTab] = useState(0)
    const handleTabChange = (value) => {
        setTab(value)
    }

    const renderTemplate = () => {
        let template = null
        switch(tab){
            case 0 : template = (props.places.length===0? null : <SimpleTable {...props}/>)
                break
            case 1 : template = (props.places.length===0? null : <DoughnutChart places={props.places} confirmed={props.confirmed}/>)
                break
            case 2 : template = (props.places.length===0? null : <HorizontalBarChart places={props.places} confirmed={props.confirmed}/>)
                break
            default : template = null
        }
        return template
    }
    return(
        <div className={styles.wrapper}>
            <Typography variant="h5" gutterBottom>
                State-Wise Stats
            </Typography>
            <Typography variant="body2" gutterBottom>
            Coronavirus updates: Get latest Coronavirus statistics for India. Coronavirus death toll, Coronavirus new cases, total cases in India and more here.
            Here you will also get the number of people recovered/treated from Coronavirus.
            </Typography>
            <CustomTab handleTabChange = {handleTabChange} tabs = {['Data Table', 'Doughnut Chart', 'Horiz. Bar Chart']}/>
            {renderTemplate()}
        </div>
    )
}

export default withRouter(Home)