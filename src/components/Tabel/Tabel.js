import * as React from 'react';
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './Tabel.css'
import { Link } from 'react-router-dom';
const BasicTable = (props) => {
    console.log({props})

    const linkArray = props.isWeekDay ? ['Text_ceva', 'Text_ceva', 'Text_ceva', 'Text_ceva'] : ['Text_ceva2', 'Text_ceva2', 'Text_ceva2', 'Text_ceva2'] 
    
    console.log({linkArray})

    return (
      <div className={"margini"}>
            <Link to={`/${linkArray[0]}`}>
                <div align="left" className='button2'>
                  Autobuze
                </div>
            </Link>
            <Link to={`/${linkArray[1]}`}>
                  <div align="left" className='button2'>Tramvaie</div>
            </Link>
            <Link to={`/${linkArray[2]}`}>
                  <div align="left" className='button2'>Pietoni</div>
            </Link>
            <Link to={`/${linkArray[3]}`}>
                  <div align="left" className='button2'>Masini</div>
              </Link>
      </div>
      
    );
  }

  export default BasicTable