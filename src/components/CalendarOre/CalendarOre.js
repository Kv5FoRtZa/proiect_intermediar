import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import BasicTable from '../Tabel/Tabel';
import "./CalendarOre.css"

const CalendarOre = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const [showTable, setShowTable] = useState(false)
  const [isWeekDay, setIsWeekDay] = useState(true)

  const onClickDayHandler = () => {
    // console.log(dateValue);

    const weekDayShort = dateValue.toString().split(' ')[0]
    setShowTable(true)

    console.log({ dateValue, isWeekDay });

    if (weekDayShort === 'Sat' || weekDayShort === 'Sun') {
      setIsWeekDay(false)
    } else {
      setIsWeekDay(true)
    }
  }

  useEffect(() => {
    onClickDayHandler()
  }, [dateValue])

  return (
    <div>
      <h1>Puteti alege o data pentru a vedea traficul si sugetii de optimizare ale acestuia</h1>
      <div className={"cezar2"}>
        <Calendar
          onChange={setDateValue}
          value={dateValue}
          onClickDay={onClickDayHandler}
          className={"cezar"}
        />
      </div>
      {showTable && <BasicTable isWeekDay={isWeekDay}/>}
    </div>

  )
}
export default CalendarOre