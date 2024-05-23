import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './Results.css';
import { Link } from 'react-router-dom';

function Results() {
  return (
    <div className='Resultcontent'>
      <div className='feedbackheader'>
        <Link to="/student"><FontAwesomeIcon icon={faArrowLeft} className='Attendanceicon' /></Link>
        <h1>Results</h1>
      </div>
      <div className="Results">
        <h1>Anuual Result</h1>
      </div>
      </div>
  );
}

export default Results;
