// import React from 'react'
 import neighbors from '../../data/neighbors.json'

// export default function Neighbors() {
//   return (
//     <div>
//       {neighbors&&neighbors.map((n)=>n.isActive && <div>
//         <ol>
//        <li>{n.fName}</li>
//        <li>{n.lName}</li>
//        <li>{n.phone}</li>
//         </ol>
//         </div>)}
//     </div>
//   )
// }
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Neighbors() {
  return (
    <TableContainer component={Paper} onScroll={alert}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell align="center">שם</StyledTableCell>
            <StyledTableCell align="center">טלפון</StyledTableCell>
            <StyledTableCell align="center">אימייל</StyledTableCell>
             </TableRow>
        </TableHead>
        
        <TableBody >
          {neighbors.map((row) => (
            <StyledTableRow >
              <StyledTableCell align="center">
              {row.fName+" "+row.lName}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                {row.phone}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" align="center">
                {row.email}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
