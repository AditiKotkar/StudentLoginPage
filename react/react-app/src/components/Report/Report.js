import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Report.css';
import { Link } from 'react-router-dom';

function Report() {
  return (
    <div className='feedbackcontent'>
      <div className='feedbackheader'>
        <Link to="/student"><FontAwesomeIcon icon={faArrowLeft} className='Attendanceicon' /></Link>
        <h1>Reports</h1>
      </div>
      
      </div>
  );
}

export default Report;