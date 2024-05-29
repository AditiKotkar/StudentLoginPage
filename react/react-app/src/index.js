/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import CollegeCodeEntry from './components/CollegeCodeEntry';
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
import 'react-calendar/dist/Calendar.css';
import Chat from './components/Chat/Chat';
import Chatbox from './components/Chat/Chatbox';
import Teacher from './components/Teacher';
import Done from './components/Done';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CollegeCodeEntry />} />
      <Route path="login" element={<StudentLogin />} /> 
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
      <Route path="Chat" element={<Chat/>}/>
      <Route path="Chatbox" element={<Chatbox/>
      <Route path="Teacher" element={<Teacher />} />
      <Route path="Done" element={<Done />} />
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
