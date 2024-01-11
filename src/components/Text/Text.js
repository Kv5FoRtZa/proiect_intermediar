import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { masiniPeOra, rows } from '../../mockData/mockData';
import './Text.css'

const Text_ceva = () => {
  console.log({ rows })

  const getTextLaLiber = (numar) => numar >= 200 ? 'Hora de varf' : '€ lejer Bo$$';

  return (
    <div>
      <div>Un text ceva</div>
      <div className={"denis"}>
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className={"cezar"}>
              <TableRow>
                <TableCell>Numar masini</TableCell>
                <TableCell align="left" >Ora</TableCell>
                <TableCell align="left" >Text la liber</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={"cezar"}>
              {masiniPeOra.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.NR_MASINI}
                  </TableCell>
                  <TableCell align="left">{row.AJUNGE}</TableCell>
                  <TableCell align="left">{getTextLaLiber(row.NR_MASINI)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
export default Text_ceva;