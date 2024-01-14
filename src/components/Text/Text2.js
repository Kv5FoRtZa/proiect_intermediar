import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { masiniPeOraw } from '../../mockData/mockData';
import './Text.css'

const Text_ceva2 = () => {

  const getTextLaLiber = (numar) => numar >= 250 ? 'Aici este o ora de varf si recomandam amplasarea unui echipaj de politie' : 'Nu este ora de varf si recomandam o semaforizare in favoarea pietonilor';

  return (
    <div>
      <br></br>
      <br></br>
      <div className='text_peste_tot'>Numarul de masini care trec in intersectie in fiecare ora in zilele de weekend</div>
      <br></br>
      <div className={"denis"}>
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className={"cezar"}>
              <TableRow>
                <TableCell className={"cap_tabel"}>Numar masini</TableCell>
                <TableCell className={"cap_tabel"} >Ora</TableCell>
                <TableCell className={"cap_tabel"} >Sugestii si identificarea orelor de varf</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={"cezar"}>
              {masiniPeOraw.map((row,index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row"className={"mid_tabel"}>
                    {row.NR_MASINI}
                  </TableCell>
                  <TableCell className={"mid_tabel"}>{row.AJUNGE}</TableCell>
                  <TableCell className={"mid_tabel"}>{getTextLaLiber(row.NR_MASINI)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
export default Text_ceva2;