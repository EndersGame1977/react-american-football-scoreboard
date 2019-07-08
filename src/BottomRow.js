import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [ down, setDown ] = useState(0);
  const [ toGo, setToGo ] = useState(0);
  const [ ballOn, setBallOn ] = useState(0);
  const [ quarter, setQuarter ] = useState(0);
  
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div 
          className="down__value"
          onClick={ () => { setDown(down +1) } }  
        >
        {down}
        </div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div 
          className="toGo__value"
          onClick={ () => { setToGo(toGo + 1) } }  
        >
        {toGo}
        </div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div 
          className="ballOn__value"
          onClick={ () => { setBallOn(ballOn + 1) } }
        >
        {ballOn}
        </div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div 
          className="quarter__value"
          onClick={ () => { setQuarter(quarter+1)} }
        >
        {quarter}
        </div>
      </div>
    </div>
  );
};

export default BottomRow;
