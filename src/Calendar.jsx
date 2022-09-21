import React from "react"
import {useState} from 'react'

function Calender() {

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const [date, setDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(new Date())


  return (
    <div className="calender">
      <h1>9월</h1>
        <ul>
            {days.map((day) => (
                <li>{day}</li>
            ))}
            {Array.from({length: 31}, (_, i) => i + 1).map((day) => (
                <li>{day}</li>
            ))}
        </ul>
    </div>
  )
}

export default Calender



