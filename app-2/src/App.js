import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state ={
      friends: ['Shay', 'Marcela', 'Corbin', 'Duncan', 'Lacey', 'Ash']
    }
  }
  render() {
    const displayFriends = this.state.friends.map((el, i) => {
      return <h2 key={i}>{el}</h2>
    })
    return <div className='App'>{displayFriends}</div>
  }
}

export default App;
