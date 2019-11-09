import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
// import Home from "./components/pages/Home";
// import About from "./components/pages/About";
// import socks from "./socks.json"
import './App.css';
import MatchCard from "./components/MatchCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultModal from "./components/Modal";

class App extends Component {

  state = {
    socks: [
      {
        "id": 1,
        "image": require("./Images/blackSock.png"),
        "clicked": false
      },

      {
        "id": 2,
        "image": require("./Images/blueBlackArgyleSock.png"),
        "clicked": false
      },

      {
        "id": 3,
        "image": require("./Images/blueWhiteDotSock.png"),
        "clicked": false
      },

      {
        "id": 4,
        "image": require("./Images/greenStripeSock.png"),
        "clicked": false
      },

      {
        "id": 5,
        "image": require("./Images/greyBlueArgyleSock.png"),
        "clicked": false
      },

      {
        "id": 6,
        "image": require("./Images/greyPinkArgyleSock.png"),
        "clicked": false
      },

      {
        "id": 7,
        "image": require("./Images/greyPurpleArgyleSock.png"),
        "clicked": false
      },

      {
        "id": 8,
        "image": require("./Images/greyRedArgyleSock.png"),
        "clicked": false
      },

      {
        "id": 9,
        "image": require("./Images/greyRedDotSock.png"),
        "clicked": false
      },

      {
        "id": 10,
        "image": require("./Images/ojDotSock.png"),
        "clicked": false
      },

      {
        "id": 11,
        "image": require("./Images/purpleStripeSock.png"),
        "clicked": false
      },

      {
        "id": 12,
        "image": require("./Images/redDotSock.png"),
        "clicked": false
      },

      {
        "id": 13,
        "image": require("./Images/yellowStripeSock.png"),
        "clicked": false
      },

      {
        "id": 14,
        "image": require("./Images/greyPurpleDotSock.png"),
        "clicked": false
      }
    ]
  }

  shuffleSocks = () => {
    const socks = this.state.socks.filter(item => item !== undefined)


    for (let i = 0; i < socks.length; i++) {
      let current = socks[i];
      let swapIndex = parseInt(Math.round(Math.random() * socks.length));
      let swapWithThis = socks[swapIndex];

      socks[i] = swapWithThis;
      socks[swapIndex] = current;

    }

    this.setState({ socks })

  };

  selectSock = id => {

    console.log(id)

    this.setState((prevState) => {
      for (let i = 0; i < prevState.socks.length; i++) {
        if (prevState.socks[i] && prevState.socks[i].id === id) {
          console.log(prevState.socks[i].clicked)
          if (prevState.socks[i].clicked === true) {
            console.log('Game Over!')
          } else {
             prevState.socks[i].clicked = true;
             console.log('set one to true!')
             return {socks: prevState.socks}
          };
        }

      }
    })

    this.shuffleSocks();

  };

  render() {

    return (
      <div className="container">

        <h1>Don't match the socks!</h1>
        <div className="container">
          <div className="row">
            {/* Having issues with undefined values being added to my sock array. Not sure what is causing that, but the filter is a stopgap for now */}
            {this.state.socks.filter(item => item !== undefined).map(sock => (
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
