import React from "react";

function StoreContainer(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Don't Match the Socks!</h1>
        <h4>Score:</h4>
        <p className="lead">
          Current Score: <span id="current-score">{props.currentScore}</span> |
          High Score: <span id="high-score">{props.highScore}</span> </p>
        <p className="lead">
          Perfect Score Streak (Current): <span id="perfect-score-streak">{props.highScoreStreak}</span> |
          Perfect Score Streak (Best): <span id="perfect-score-streak">{props.highScoreStreakBest}</span>

        </p>
      </div>
    </div>
  );
}
export default StoreContainer;
