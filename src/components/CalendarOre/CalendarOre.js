import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import BasicTable from '../Tabel/Tabel';
import "./CalendarOre.css"

let zis = 69 ,zis1 = 70;
function este(date = new Date())
    {
        return date.getDay() === 6 || date.getDay() === 5;
    }
const CalendarOre = () =>
{  
    const [dateValue, setDateValue] = useState(new Date());
    const [showTable, setShowTable] = useState(false)

    const onClickDayHandler = () => {
        console.log(zis);

        setShowTable(true)
    }
    return(
        <div>
             <h1>Puteti alege o data pentru a vedea traficul si sugetii de optimizare ale acestuia</h1>
                <div className={"cezar2"}>
                    <Calendar
                        onChange={setDateValue}
                        value={dateValue}
                        onClickDay={onClickDayHandler}
                        className={"cezar"}
                        zis = {dateValue}
                    />
            </div>
            {showTable && <BasicTable />}
        </div>
        
    )
}
export default CalendarOre