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

function ocupar_A1()
{
  alert("el espacio A1 ha sido ocupado");
}

function desocupar_A1()
{
  alert("el espacio A1 ha sido desocupado");
}

function ocupar_A2()
{
  alert("el espacio A2 ha sido ocupado");
}

function desocupar_A2()
{
  alert("el espacio A2 ha sido desocupado");
}

function ocupar_A3()
{
  alert("el espacio A3 ha sido ocupado");
}

function desocupar_A3()
{
  alert("el espacio A3 ha sido desocupado");
}

function ocupar_A4()
{
  alert("el espacio A4 ha sido ocupado");
}

function desocupar_A4()
{
  alert("el espacio A4 ha sido desocupado");
}

function ocupar_A5()
{
  alert("el espacio A5 ha sido ocupado");
}

function desocupar_A5()
{
  alert("el espacio A5 ha sido desocupado");
}

function ocupar_B1()
{
  alert("el espacio B1 ha sido ocupado");
}

function desocupar_B1()
{
  alert("el espacio B1 ha sido desocupado");
}

function ocupar_B2()
{
  alert("el espacio B2 ha sido ocupado");
}

function desocupar_B2()
{
  alert("el espacio B2 ha sido desocupado");
}

function ocupar_B3()
{
  alert("el espacio B3 ha sido ocupado");
}

function desocupar_B3()
{
  alert("el espacio B3 ha sido desocupado");
}

function ocupar_B4()
{
  alert("el espacio B4 ha sido ocupado");
}

function desocupar_B4()
{
  alert("el espacio B4 ha sido desocupado");
}

function ocupar_B5()
{
  alert("el espacio B5 ha sido ocupado");
}

function desocupar_B5()
{
  alert("el espacio B5 ha sido desocupado");
}

function ocupar_C1()
{
  alert("el espacio C1 ha sido ocupado");
}

function desocupar_C1()
{
  alert("el espacio C1 ha sido desocupado");
}

function ocupar_C2()
{
  alert("el espacio C2 ha sido ocupado");
}

function desocupar_C2()
{
  alert("el espacio C2 ha sido desocupado");
}

function ocupar_C3()
{
  alert("el espacio C3 ha sido ocupado");
}

function desocupar_C3()
{
  alert("el espacio C3 ha sido desocupado");
}

function ocupar_C4()
{
  alert("el espacio C4 ha sido ocupado");
}

function desocupar_C4()
{
  alert("el espacio C4 ha sido desocupado");
}

function ocupar_C5()
{
  alert("el espacio C5 ha sido ocupado");
}

function desocupar_C5()
{
  alert("el espacio C5 ha sido desocupado");
}

function ocupar_D1()
{
  alert("el espacio D1 ha sido ocupado");
}

function desocupar_D1()
{
  alert("el espacio D1 ha sido desocupado");
}

function ocupar_D2()
{
  alert("el espacio D2 ha sido ocupado");
}

function desocupar_D2()
{
  alert("el espacio D2 ha sido desocupado");
}

function ocupar_D3()
{
  alert("el espacio D3 ha sido ocupado");
}

function desocupar_D3()
{
  alert("el espacio D3 ha sido desocupado");
}

function ocupar_D4()
{
  alert("el espacio D4 ha sido ocupado");
}

function desocupar_D4()
{
  alert("el espacio D4 ha sido desocupado");
}

function ocupar_D5()
{
  alert("el espacio D5 ha sido ocupado");
}

function desocupar_D5()
{
  alert("el espacio D5 ha sido desocupado");
}


const rows = [
  createData('A',<p> A1 <button onClick={ocupar_A1} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_A1} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>,<p> B1 <button onClick={ocupar_B1} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_B1} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>,<p> C1 <button onClick={ocupar_C1} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_C1} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>,<p> D1 <button onClick={ocupar_D1} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_D1} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>),
  createData('B',<p> A2 <button onClick={ocupar_A2} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_A2} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>,<p> B2 <button onClick={ocupar_B2} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_B2} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>,<p> C2 <button onClick={ocupar_C2} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_C2} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>,<p> D2 <button onClick={ocupar_D2} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_D2} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>),
  createData('C',<p> A3 <button onClick={ocupar_A3} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_A3} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>,<p> B3 <button onClick={ocupar_B3} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_B3} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>,<p> C3 <button onClick={ocupar_C3} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_C3} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>,<p> D3 <button onClick={ocupar_D3} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_D3} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>),
  createData('D',<p> A4 <button onClick={ocupar_A4} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_A4} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>,<p> B4 <button onClick={ocupar_B4} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_B4} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>,<p> C4 <button onClick={ocupar_C4} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_C4} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>,<p> D4 <button onClick={ocupar_D4} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_D4} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>),
  createData('E',<p> A5 <button onClick={ocupar_A5} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_A5} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>,<p> B5 <button onClick={ocupar_B5} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_B5} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>,<p> C5 <button onClick={ocupar_C5} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_C5} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>,<p> D5 <button onClick={ocupar_D5} style={{backgroundColor:'green',color:'white',width:'70px',height:'40px'}}>ocupar</button><button onClick={desocupar_D5} style={{backgroundColor:'green',color:'white',width:'90px',height:'40px'}}>desocupar</button></p>),

  
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    marginTop: "40px",
    marginRight: "500px",
    padding:"500px",
    fontSize: "20px",
  },

  TableCell:{
    fontSize: 20,
  },
  
  

});



   


export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table border="3" className={classes.table} aria-label="customized table">
        <TableHead>
        <StyledTableCell align="center" colSpan={6} style={{backgroundColor:'green'}}>
              GESTION DE VEHICULOS
            </StyledTableCell>
          <TableRow >
            <StyledTableCell style={{backgroundColor:'green'}}>ESPACIOS</StyledTableCell>
            <StyledTableCell align="center" style={{backgroundColor:'green'}}>A</StyledTableCell>
            <StyledTableCell align="center" style={{backgroundColor:'green'}}>B</StyledTableCell>
            <StyledTableCell align="center" style={{backgroundColor:'green'}}>C</StyledTableCell>
            <StyledTableCell align="center" style={{backgroundColor:'green'}}>D</StyledTableCell>
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