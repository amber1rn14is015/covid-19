import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import {FixedSizeList as List} from 'react-window';
import CustomizedDialogs from '../../../Widgets/Dialog/Dialog';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '340px',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  root2: {
    padding: theme.spacing(3, 2),
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
}));

const Row = props => {
   
    const {data, index, style} = props;
    const backupnotes = data[index].backupnotes;
    const agebracket = data[index].agebracket===""? "Unknown" : data[index].agebracket;
    const gender = data[index].gender ===""? "Unknown" : data[index].gender;
    const detectedcity = data[index].detectedcity;
    const detectedstate = data[index].detectedstate;
    const dateannounced = data[index].dateannounced;
    const notes = data[index].notes;
    const currentstatus = data[index].currentstatus;
    const statuschangedate = data[index].statuschangedate;
    const source1 = data[index].source1;
    const source2 = data[index].source2;
    return (
    <div>
    <ListItem key={index} style={style} alignItems="flex-start">
    <CustomizedDialogs backupnotes={backupnotes}
                       agebracket={agebracket}
                       gender={gender}
                       detectedcity={detectedcity}
                       detectedstate={detectedstate}
                       dateannounced={dateannounced}
                       notes={notes}
                       currentstatus={currentstatus}
                       statuschangedate={statuschangedate}
                       source1={source1}
                       source2={source2}
                       >
    <Typography display="block" align="left" style={{paddingRight: "10px", verticalAlign:"top"}} variant="h5" gutterBottom>P{index}</Typography>
    <Typography align="left" paragraph>
      {backupnotes}
    </Typography>
    &emsp;&emsp;
    <Typography variant="caption" align="right" paragraph>
      Detected: {detectedstate} - {dateannounced}
    </Typography>
    </CustomizedDialogs>
  </ListItem>
  </div>
)}


const PatientList = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="caption" color="primary">
        Click on the item to get more details
      </Typography>
      <List
        className={classes.root}
        height={1000}
        itemCount={props.patientInfo.length}
        itemSize={120}
        width={"100%"}
        itemData={props.patientInfo}
      >
        {Row}
      </List>
    </div>
  )
}
export default PatientList