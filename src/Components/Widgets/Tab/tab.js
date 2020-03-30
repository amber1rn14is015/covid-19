import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import News from '../../Pages/News/news';

const useStyles = makeStyles({
  root: {
    marginTop: "0px",
    flexGrow: 1,
    maxWidth: "100%",
  },
});

export default function CustomTab(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.handleTabChange(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        {props.tabs.map( (element,i) => <Tab key={i} label={element}/>)}
        {/* <Tab label="Patient Details" />
        <Tab label="Patient vs Time Graph" /> */}
      </Tabs>
    </Paper>
  );
}