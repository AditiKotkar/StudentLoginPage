import React from 'react';
import './Evaluated.css';

function Evaluated () {
  return (
    <div className="Evaluatedcontener">
        <div className="Evaluatedcontener1">
            <div className="Evaluatedtext1">
                <h1 className="Evaluatedname">Hello, Sai Chaudhari</h1>
                <h2 className="Evaluateddate">12 March 2024</h2>
            </div>
        </div>

        <div className="EvaluatedLine">
            <div className="Evaluatedline"></div>
        </div>

        <div className="Evaluatedcontener2">
            <div className="Evaluatedbox">
                <div className="Evaluatedpercent">
                    <svg>
                        <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                <div className="Evaluatednumber">
                    <h2>100%</h2>
                </div>
                </div>
            </div>
            <div className="Evaluatedrighttext">
                <div className="Evaluatedblue">
                    <div className="Evaluatedbluecolor"></div>
                    <h1 className="EvaluatedCompleted">Completed</h1>
                </div>
                <div className="Evaluatedpink">
                    <div className="Evaluatedpinkcolor"></div>
                    <h1 className="EvaluatedCompleted">Incompleted</h1>
                </div>
            </div>
        </div>

        <div className="EvaluatedLine">
            <div className="Evaluatedline"></div>
        </div>

        <div className="Evaluatedhome">
            <div className="Evaluatedhomework">
                <h1>Home work</h1>
            </div>
            <div className="Evaluatedboxes">
                <div className="Evaluatedbox1">
                    <h1>English</h1>
                    <h2>Essay about Cherry</h2>
                    <div className="Evaluatedbuton">
                        <div className="Evaluatedview">
                            <span>VIEW</span>
                        </div>
                        <h1>50 Submitted</h1>
                    </div>
                </div>
                <div className="Evaluatedbox1">
                    <h1>English</h1>
                    <h2>Essay about Cherry</h2>
                    <div className="Evaluatedbuton">
                        <div className="Evaluatedview">
                            <span>VIEW</span>
                        </div>
                        <h1>50 Submitted</h1>
                    </div>
                </div>
            </div>
        </div>

        <div className="EvaluatedLine">
        <div className="Evaluatedline"></div>
        </div>

    </div>      
  );
}

export default Evaluated;
