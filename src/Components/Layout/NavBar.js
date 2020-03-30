import React, {Component} from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotesIcon from '@material-ui/icons/Notes';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import InfoIcon from '@material-ui/icons/Info';
import { withRouter } from 'react-router-dom';


class NavBar extends Component {

    state = {
        value: 0   
    }

    UNSAFE_componentWillMount(){
        let value = parseInt(this.getKeyByValue(this.props.location.pathname))
        //console.log(value)
        this.setState({
            value
        })
    }

    setValue = (newValue) => {
        this.setState({
            value: newValue
        })
        this.navigate(newValue.toString())
    }

    nav_obj = {
        '0' : '/',
        '1' : '/news',
        '2' : '/qna',
        '3' : '/info'
    }

    getKeyByValue(value) {
        return Object.keys(this.nav_obj).find(key => this.nav_obj[key] === value);
    }

    navigate = (newValue) => {
        Object.keys(this.nav_obj).forEach((element)=>{
            if(element === newValue){
                this.props.history.push(this.nav_obj[element])
            }
        })
    }

    render(){
        return(
            <BottomNavigation
            value={this.state.value}
            onChange={(event, newValue) => {
              this.setValue(newValue);
            }}
            showLabels
            style = {{
                width: "100%",
                position: "fixed",
                bottom: "0px"
            }}
          >
            <BottomNavigationAction label="Stats" icon={<EqualizerIcon />} />
            <BottomNavigationAction label="News" icon={<NotesIcon />} />
            <BottomNavigationAction label="Q/A" icon={<QuestionAnswerIcon />} />
            <BottomNavigationAction label="Info" icon={<InfoIcon />} />
      
          </BottomNavigation>
        )
    }
}

export default withRouter(NavBar)