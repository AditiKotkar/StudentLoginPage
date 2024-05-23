/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import StudentLogin from './components/studentlogin'; 
import StudentDashbord from './components/StudentDashbord';
import Profilepage from './components/Profilepage';
import Homework from './components/homework/Homework';
import Mainsub from './components/homework/Mainsub';
import Syllabus from './components/syllabus/Syllabus';
import Subject from './components/syllabus/Subject';
import RomanNumerals from './components/syllabus/RomanNumerals';
import Attendancecal from './components/Attendence/Attendancecal';
import Feedback from './components/Feedback/Feedback';
import Report from './components/Report/Report';
import Results from './components/Results/Results';
import EventCalender from './components/EventCalender/EventCalender';
import Project from './components/EventCalender/Project';
import 'react-calendar/dist/Calendar.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StudentLogin />} /> 
      <Route path="student" element={<StudentDashbord />} />
      <Route path="profile" element={<Profilepage />} />
      <Route path="home" element={<Homework />} />
      <Route path="mainsub" element={<Mainsub />} />
      <Route path="Syllabus" element={<Syllabus />} />
      <Route path="Subject" element={<Subject />} />
      <Route path="RomanNumerals" element={<RomanNumerals />} />
      <Route path="Attendancecal" element={<Attendancecal />} />
      <Route path="Feedback" element={<Feedback/>}/>
      <Route path="Report" element={<Report/>}/>
      <Route path="Results" element={<Results/>}/>
      <Route path="EventCalender" element={<EventCalender />}/>
      <Route path="Project" element={<Project />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
