import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import BasicTable from '../Tabel/Tabel';

const CalendarOre = () =>
{
    const [dateValue, setDateValue] = useState(new Date());
    const [showTable, setShowTable] = useState(false)

    const onClickDayHandler = () => {
        console.log(dateValue)

        setShowTable(true)
    }


    return(
        <div>
        <Calendar
            onChange={setDateValue}
            value={dateValue}
            onClickDay={onClickDayHandler}
        />
        {showTable && <BasicTable />}
        </div>
    )
}
export default CalendarOre