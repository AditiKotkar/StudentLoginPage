import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Attendance.css';
import { Link } from 'react-router-dom';

const AttendanceCal = () => {
  const [value, setValue] = useState(new Date());
  const [absentDates, setAbsentDates] = useState([
    { title: 'Reasons of Holiday', date: new Date(2024, 3, 2), reason: 'ill' },
    { title: 'Reasons of Holiday', date: new Date(2024, 3, 3), reason: 'Sister Function' },
    { title: 'Reasons of Holiday', date: new Date(2024, 3, 19), reason: 'ill' },
    { title: 'Reasons of Holiday', date: new Date(2024, 3, 24), reason: 'Sister Function' },
  ]);


  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const day = date.getDay();
      if (absentDates.some(absent => absent.date.toDateString() === date.toDateString())) {
        return 'absent';
      } else if (day === 0) {
        return 'sunday';
      } else if (day === 6) {
        return 'saturday';
      } else {
        return 'weekday';
      }
    }
  };

  return (
    <div className='Attendancecontener'>
      <div className='Attendancecal'>
        <Link to="/student"><FontAwesomeIcon icon={faArrowLeft} className='Attendanceicon' /></Link>
        <h1>Attendance</h1>
        <FontAwesomeIcon icon={faPlus} className='Attendanceicon' />
      </div>
      <div className='Attendanceday'>
      <div className='Attendancedays'>
      <Calendar onChange={setValue} value={value} tileClassName={tileClassName} />
      </div>
      <div className='attendancere'>
          {absentDates.map((absent, index) => (
          <div className='Attendanceevents' key={index}>
          <div className='Attendanceev'>
            <div className='Attendanceevent'>
              <div className='Attendancet'>
                <div className='Attendancedot'></div>
                <p>{absent.date.toDateString()}</p>
              </div>
              <h1>{absent.title}</h1>
              <h2>{absent.reason}</h2>
            </div>
          </div>
          </div>
        ))}
        </div>
    </div>
    </div>
  );
};

export default AttendanceCal;