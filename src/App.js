import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  const [ homeScore, setHomeScore ] = useState(0);
  const [ awayScore, setAwayScore ]  = useState(0);
  const [ timer, setTimer ] = useState(0);

  // const changeTimer = () => {
  //   setTimer(timer+1)
  // }
  
  useEffect(() => {
    
    // componentDidMount(), componentDidUpdate()
    const time = setInterval(() => { 
      setTimer(timer => timer + 1)},
    1000)
    
    return () => {
    // componentWillUnmount()
      clearInterval(time);
    }
  // effect dependency array
  }, []);

const minutes = () => {
  return Math.floor(timer / 60);
}

const seconds = () => {
  if (timer < 10) {
    return "0" + timer % 60
  }
  return timer % 60;
}
  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{`${minutes()}:${seconds()}`}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button 
            className="homeButtons__touchdown" 
            onClick={ () => { setHomeScore(homeScore + 7) } } 
          >
          Home Touchdown
          </button>
          <button 
            className="homeButtons__fieldGoal"
            onClick={ () => { setHomeScore(homeScore + 3) } }
          >
          Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button 
            className="awayButtons__touchdown" 
            onClick={ () => { setAwayScore(awayScore + 7) } }
            >
            Away Touchdown
            </button>
          <button 
            className="awayButtons__fieldGoal"
            onClick={ () => { setAwayScore(awayScore + 3) } }
            >
            Away Field Goal
            </button>
        </div>
      </section>
    </div>
  );
}

export default App;
