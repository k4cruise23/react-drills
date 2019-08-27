import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      friends: ['Shay', 'Marcela', 'Corbin', 'Duncan', 'Ash']
    }
  }

  handleChange(filter) {
    this.setState({filterString: filter})
  }


  render() {
    let displayFriends = this.state.friends
    .filter((el, i) => {
      return el.includes(this.state.filterString)
    })
    .map((el, i) => {
      return <h2 key={i}>{el}</h2>
    })

    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)} type='text'></input>
        {displayFriends}
      </div>
    );
  }
}

export default App;
