import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 340
  },
});

const SimpleTable = (props) => {
  const classes = useStyles();
  return (
    <TableContainer style={{width: "100%"}} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Place</TableCell>
            <TableCell align="right">Confirmed</TableCell>
            <TableCell align="right">Recovered</TableCell>
            <TableCell align="right">Death</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.jsonData.map((row) => (
            <TableRow key={row.loc}>
              <TableCell component="th" scope="row">
                {row.loc}
              </TableCell>
              <TableCell align="right">{row.confirmedCasesIndian}</TableCell>
              <TableCell align="right">{row.discharged}</TableCell>
              <TableCell align="right">{row.deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default SimpleTable