import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function hacer_click()

    {

        alert("Me haz dado un click");

    }

const rows = [
  createData('A',<p> A1 <button value="dame click" onclick="hacer_click()">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>,<p> B1 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>,<p> C1 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>,<p> D1 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>),
  createData('B',<p> A2 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>,<p> B2 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>,<p> C2 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>,<p> D2 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>),
  createData('C',<p> A3 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>,<p> B3 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>,<p> C3 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>,<p> D3 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>),
  createData('D',<p> A4 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>,<p> B4 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>,<p> C4 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>,<p> D4 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>),
  createData('E',<p> A5 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>,<p> B5 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>,<p> C5 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>,<p> D5 <button type="button" onclick="alert('bien hecho')">ocupar</button><button type="button" onclick="alert('bien hecho')">desocupar</button></p>),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    marginTop: "40px",
    marginRight: "500px",
    padding:"500px",
    fontSize: 20,
  },

  TableCell:{
    fontSize: 20,
  }


});



   


export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table border="3" className={classes.table} aria-label="customized table">
        <TableHead>
        <StyledTableCell align="center" colSpan={6}>
              GESTION DE VEHICULOS
            </StyledTableCell>
          <TableRow >
            <StyledTableCell>ESPACIOS</StyledTableCell>
            <StyledTableCell align="center">A</StyledTableCell>
            <StyledTableCell align="center">B</StyledTableCell>
            <StyledTableCell align="center">C</StyledTableCell>
            <StyledTableCell align="center">D</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    
  );
}