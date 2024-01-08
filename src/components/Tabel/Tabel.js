import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { rows } from '../../mockData/mockData';

const BasicTable = () => {
    
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Ceva</TableCell>
              <TableCell align="left">Ivan</TableCell>
              <TableCell align="left">Et</TableCell>
              <TableCell align="left">Fra*ce</TableCell>
              <TableCell align="left">Ce face linia asta?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.ora}</TableCell>
                <TableCell align="left">{row.timp}</TableCell>
                <TableCell align="left">{row.ceva}</TableCell>
                <TableCell align="left">{row.ivan}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  export default BasicTable