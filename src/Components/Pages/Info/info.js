import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import CustomTabs from '../../Widgets/Tab/tab'
import PatientList from './PatientList/patientList'
import TimeSeries from './TimeSeries/timeSeries'
import { Typography } from '@material-ui/core'

const Info = (props) => {

    const [tab, setTab] = useState(0)

    const handleTabChange = (value) => {
        setTab(value)
    }

    const renderTemplate = () => {
        let template = null
        switch(tab){
            case 0 : template = (props.patientInfo.length===0? null : <PatientList patientInfo={props.patientInfo}/>)
                break
            case 1 : template = (props.cases_time_series.length===0? null : <TimeSeries cases_time_series={props.cases_time_series} />)
                break
            default : template = null
        }
        return template
    }
    //console.log(props.patientInfo)
    return(
        <div>
            <Typography variant="h5" gutterBottom>
                Cases Information
            </Typography>
            <CustomTabs handleTabChange = {handleTabChange} tabs = {['Patient List', 'Cases-Time Graph']}/>
            {renderTemplate()}
        </div>
    )
}

export default withRouter(Info)