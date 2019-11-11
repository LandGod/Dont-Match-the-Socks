import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import socks from "./socks.json"
import "./App.css";
import MatchCard from "./components/MatchCard";
import "bootstrap/dist/css/bootstrap.min.css";
import ScoreContainer from "./components/ScoreContainer";

class App extends Component {
  state = {
    socks: [
      {
        id: 1,
        image: require("./Images/blackSock.png"),
        clicked: false
      },

      {
        id: 2,
        image: require("./Images/blueBlackArgyleSock.png"),
        clicked: false
      },

      {
        id: 3,
        image: require("./Images/blueWhiteDotSock.png"),
        clicked: false
      },

      {
        id: 4,
        image: require("./Images/greenStripeSock.png"),
        clicked: false
      },

      {
        id: 5,
        image: require("./Images/greyBlueArgyleSock.png"),
        clicked: false
      },

      {
        id: 6,
        image: require("./Images/greyPinkArgyleSock.png"),
        clicked: false
      },

      {
        id: 7,
        image: require("./Images/greyPurpleArgyleSock.png"),
        clicked: false
      },

      {
        id: 8,
        image: require("./Images/greyRedArgyleSock.png"),
        clicked: false
      },

      {
        id: 9,
        image: require("./Images/greyRedDotSock.png"),
        clicked: false
      },

      {
        id: 10,
        image: require("./Images/ojDotSock.png"),
        clicked: false
      },

      {
        id: 11,
        image: require("./Images/purpleStripeSock.png"),
        clicked: false
      },

      {
        id: 12,
        image: require("./Images/redDotSock.png"),
        clicked: false
      },

      {
        id: 13,
        image: require("./Images/yellowStripeSock.png"),
        clicked: false
      },

      {
        id: 14,
        image: require("./Images/greyPurpleDotSock.png"),
        clicked: false
      }
    ],
    currentScore: 0,
    highScore: 0,
    perfectScoreStreak: 0,
    perfectScoreStreakBest: 0
  };

  componentDidMount() {
    this.shuffleSocks();
  }

  shuffleSocks = () => {
    const socks = this.state.socks.filter(item => item !== undefined);

    for (let i = 0; i < socks.length; i++) {
      let current = socks[i];
      let swapIndex = parseInt(Math.floor(Math.random() * socks.length));
      let swapWithThis = socks[swapIndex];

      socks[i] = swapWithThis;
      socks[swapIndex] = current;
    }

    this.setState({ socks });
  };

  selectSock = id => {

    // Using set state with anonymous function pattern so that we can get the previous state as an argument to work with
    this.setState(prevState => {

      // First check which sock was clicked
      for (let i = 0; i < prevState.socks.length; i++) {
        if (prevState.socks[i] && prevState.socks[i].id === id) {

          // If sock has already been clicked, game over, reset score
          if (prevState.socks[i].clicked === true) {
            console.log("Game Over!");
            // Reset all socks to unclicked
            for (let i = 0; i < prevState.socks.length; i++) {
              prevState.socks[i].clicked = false;
            }
            // Update state with altered info and reset score
            return { 
              socks: prevState.socks,
              currentScore: 0
            }
          } 

          // If sock has not already been clicked
          else {
            // Mark it as clicked
            prevState.socks[i].clicked = true;

            // If incrementing score would hit 14, then declare game won and increment high scores accordingly
            if (this.state.currentScore === 13) {
              for (let i = 0; i < prevState.socks.length; i++) {
                prevState.socks[i].clicked = false;
              }
              prevState.currentScore = 0;
              prevState.highScore = 14;
              prevState.perfectScoreStreak += 1;
              if (prevState.perfectScoreStreakBest < prevState.perfectScoreStreak) {
                prevState.perfectScoreStreakBest = prevState.perfectScoreStreak
              };

              return { prevState };
            } 

            // If game would not end, then increment score (and high score if applicable) accordingly
            else {
              return {
                socks: prevState.socks,
                currentScore: prevState.currentScore + 1,
                highScore:
                  prevState.highScore < prevState.currentScore + 1
                    ? prevState.currentScore + 1
                    : prevState.highScore
              };
            }
          }
        }
      }
    });

    // And no matter what else happens, always shuffle the order that the socks are displayed in
    this.shuffleSocks();
  };

  render() {
    return (
      <div className="container">
        <ScoreContainer
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
          highScoreStreak={this.state.perfectScoreStreak}
          highScoreStreakBest={this.state.perfectScoreStreakBest}
        />
        <h1>Don't match the socks!</h1>
        <div className="container">
          <div className="row">
            {/* Rendering all socks */}
            {this.state.socks
              .map(sock => (
                <MatchCard
                  key={sock.id}
                  id={sock.id}
                  shuffle={this.shuffleSocks}
                  image={sock.image}
                  clickHandler={this.selectSock}
                  clicked={sock.clicked}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
