import * as React from 'react';
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './Tabel.css'
import { Link } from 'react-router-dom';
const BasicTable = () => {
    
    return (
      <div className={"margini"}>
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className={"cezar"}>
              <TableRow>
                <TableCell>In data aleasa puteti vedea pu</TableCell>
                
                    <Link to="/Text_ceva">
                        <TableCell align="left" className='button2'>
                          Autobuze
                        </TableCell>
                    </Link>
                  <Link to="/Text_ceva">
                        <TableCell align="left" className='button2'>Tramvaie</TableCell>
                  </Link>
                  <Link to="/Text_ceva">
                        <TableCell align="left" className='button2'>Pietoni</TableCell>
                  </Link>
                  <Link to="/Text_ceva">
                        <TableCell align="left" className='button2'>Masini</TableCell>
                   </Link>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </div>
      
    );
  }

  export default BasicTable