import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import {Link} from '@material-ui/core';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        {props.children}
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.backupnotes}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Detected: {props.detectedcity},{props.detectedstate}
          </Typography>
          <Typography gutterBottom>
            Cause: {props.notes}
          </Typography>
          <Typography gutterBottom>
            Status: {props.currentstatus} - {props.statuschangedate}
          </Typography>
          <Typography gutterBottom>
            Age: {props.agebracket} &emsp; Gender: {props.gender}
          </Typography>
        </DialogContent>
        {props.source1===""? null : (<Link href={props.source1} rel="noopener noreferrer" target="_blank">
          <Typography variant="caption" component="span">
            &emsp;Source
          </Typography>
        </Link>)}
        {props.source2===""? null : (<Link href={props.source2} rel="noopener noreferrer" target="_blank">
          <Typography variant="caption" component="span">
            &emsp;Source
          </Typography>
        </Link>)}
      </Dialog>
    </div>
  );
}
