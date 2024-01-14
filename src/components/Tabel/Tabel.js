import * as React from 'react';
import './Tabel.css'
import { Link } from 'react-router-dom';
const BasicTable = (props) => {

    const linkArray = props.isWeekDay ? ['Text_ceva', 'Text_ceva02', 'Text_ceva03', 'Text_ceva04'] : ['Text_ceva2', 'Text_ceva22', 'Text_ceva23', 'Text_ceva24'] 
    

    return (
      <div className={"margini"}>
            <Link to={`/${linkArray[0]}`}>
                <div align="left" className='button3'>
                  Masini
                </div>
            </Link>
            <Link to={`/${linkArray[1]}`}>
                  <div align="left" className='button3'>Tramvaie</div>
            </Link>
            <Link to={`/${linkArray[2]}`}>
                  <div align="left" className='button3'>Pietoni</div>
            </Link>
            <Link to={`/${linkArray[3]}`}>
                  <div align="left" className='button3'>Autobuze</div>
              </Link>
      </div>
      
    );
  }

  export default BasicTable