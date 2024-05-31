/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import './mainsub.css';
import Pending  from './Pending';
import Submitted from './Submitted';
import Evaluated from './Evaluated';

function Mainsub () {
  const [activeTab, setActiveTab] = useState('Pending');
  
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  }
  const [selectedBox, setSelectedBox] = useState('Pending');
  const handleBoxClick = (boxName) => {
    setSelectedBox(boxName);
  };
  return (
    <div className="maincontener">
    <div className="maincontener1">
        <div className="maintextimg">
            <h1 className="maintext">Your Homework<br></br>is here!</h1>
            <div className="mainimg"></div>
        </div>
    </div>
    <div className="mainbut1">
        <div className="mainbuttons1">
            <div className= {`div ${selectedBox === 'Pending' ? 'selected Pending' : ''}`} onClick={() => {handleTabChange('Pending'); handleBoxClick('Pending');}}>
            <span className={`tab-button ${activeTab === 'Pending' ? 'active' : ''}`}>Pending</span>
            </div>
            <div className= {`div ${selectedBox === 'Submitted' ? 'selected Submitted' : ''}`} onClick={() => {handleTabChange('Submitted'); handleBoxClick('Submitted');}}>
            <span className={`tab-button ${activeTab === 'Submitted' ? 'active' : ''}`}>Submitted</span>
            </div>
            <div className= {`div ${selectedBox === 'Evaluated' ? 'selected Evaluated' : ''}`} onClick={() => {handleTabChange('Evaluated'); handleBoxClick('Evaluated');}}>
            <span className={`tab-button ${activeTab === 'Evaluated' ? 'active' : ''}`}>Evaluated</span>
            </div>
        </div>
    </div>
    {activeTab === 'Pending' && <Pending />}
    {activeTab === 'Submitted' && <Submitted />}
    {activeTab === 'Evaluated' && <Evaluated />}
    </div>    
  );
}

export default Mainsub;
