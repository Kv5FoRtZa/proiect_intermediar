import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { rows } from '../../mockData/mockData';
import './Tabel.css'
import { Link } from 'react-router-dom';
const BasicTable = () => {
    
    return (
      <div >
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className={"cezar"}>
              <TableRow>
                <TableCell>In data aleasa puteti vedea</TableCell>
                
                    <Link to="/Text_ceva">
                        <TableCell align="left" className='button2'>
                          Idei de optimizare
                        </TableCell>
                    </Link>
                  <Link to="/Text_ceva">
                        <TableCell align="left" className='button2'>Et</TableCell>
                  </Link>
                  <Link to="/Text_ceva">
                        <TableCell align="left" className='button2'>Fra*ce</TableCell>
                  </Link>
                  <Link to="/Text_ceva">
                        <TableCell align="left" className='button2'>Ce face linia asta?</TableCell>
                   </Link>
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
      </div>
      
    );
  }

  export default BasicTable