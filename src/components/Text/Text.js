import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { rows } from '../../mockData/mockData';
import './Text.css'

const Text_ceva =() =>{
    return(
        <div>
            <div>Un text ceva</div>
            <div className={"denis"}>
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead className={"cezar"}>
                            <TableRow>
                                <TableCell>In data aleasa puteti vedea pu</TableCell>
                                <TableCell align="left" >Autobuze</TableCell>
                                <TableCell align="left" >Tramvaie</TableCell>
                                <TableCell align="left" >Pietoni</TableCell>
                                <TableCell align="left" >Masini</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className={"cezar"}>
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
      </div>
    )
}
export default Text_ceva;