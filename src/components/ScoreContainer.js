import React from "react";

function StoreContainer(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Score</h1>
        <p className="lead">
          Current Score: <span id="current-score">{props.currentScore}</span> | 
          High Score: <span id="high-score">{props.highScore}</span> | 
          Perfect Score Streak: <span id="perfect-score-streak">{props.highScoreStreak}</span>

        </p>
      </div>
    </div>
  );
}
export default StoreContainer;
