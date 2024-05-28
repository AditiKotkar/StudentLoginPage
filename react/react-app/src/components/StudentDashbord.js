import { faEllipsisVertical, faTimes, faGear, faHouse, faCircleInfo, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import {  faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import './StudentDashbord.css';

//IMG
import homework from './images/Homework1.png';
import syllabus from './images/Syllabus2.png';
import chat from './images/chat box 3.png';
import attendence from './images/Attendence4.png';
import feedback from './images/feedback8.png';
import reports from './images/report9.png';

const StudentDashbord = () => {
    const [isActive, setIsActive] = useState(false);
    const [student, setStudent] = useState([null]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch('http://localhost:3001/student-info');
        const data = await response.json();
        setStudent(data[0]);
      } catch (error) {
        console.error('Error fetching student information:', error); 
      }
    };

    fetchStudentData();
  }, []);


    const toggleMenu = () => {
        setIsActive(!isActive);
    };

  return (
    <div className="contene">
     <div className="bgimg">
        <div className="img-1"></div>
        <div className="Name">
          <span className="hiSaiChudhari">Hi, {student.stud_name}</span><br></br>
          <span className="rollNumber1">Roll Number : {student.stud_rollno}</span><br></br>
          <span className="class12Std">Class : {student.stud_std}</span>
        </div>
        <nav className="navbar">
          <div className="max-width">
            <ul className={`menu ${isActive ? 'active' : ''}`}>
              <li><FontAwesomeIcon icon={faHouse} /><a href="#Home" className="menu-btn">Home</a></li>
              <li><FontAwesomeIcon icon={faCircleUser} /><Link to="/Profile" className="menu-btn">Profile</Link></li>
              <li><FontAwesomeIcon icon={faCircleInfo} /><a href="#About" className="menu-btn">About School</a></li>
              <li><FontAwesomeIcon icon={faGear} /><a href="#Setting" className="menu-btn">Setting</a></li>
              <li><FontAwesomeIcon icon={faArrowRightFromBracket} /><a href="#Logout" className="menu-btn">Logout</a></li>
            </ul>
            <div className="menu-btn" onClick={toggleMenu}>
              <FontAwesomeIcon icon={isActive ? faTimes : faEllipsisVertical} />
            </div>
          </div>
        </nav>          
     </div>
            <div className="con">
            <Link to="/home">
            <div className="contener">
                <div className="img">
                    <img src={homework} alt="Homework" />
                </div>
                <h1>Homework</h1>
            </div>
            </Link>
            <Link to="/Syllabus">
        <div className="contener">
            <div className="img">
                <img src={syllabus} alt="Syllabus" />
            </div>
            <h1>Syllabus</h1>
        </div>
        </Link>
        <div className="contener">
            <div className="img">
                <img src={chat} alt="Chat" />
            </div>
            <h1>Chat Option</h1>
        </div>  
        <Link to="/Attendancecal"> 
        <div className="contener">
            <div className="img">
                <img src={attendence} alt="Attendence_Sheet" />
            </div>
            <h1>Attendence Sheet</h1>
        </div>
        </Link>  
        <Link to="/Feedback">
        <div className="contener">
            <div className="img">
                <img src={feedback} alt="Feedback" />
            </div>
            <h1>Feedback of Teacher</h1>
        </div>
        </Link>
        <Link to="/Report">
        <div className="contener">
            <div className="img">
                <img src={reports} alt="report" />
            </div>
            <h1>Reports</h1>
        </div>
        </Link>
        </div>
            </div>
  );
}
export default StudentDashbord;
