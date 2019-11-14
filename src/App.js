import React from 'react';
import './App.css';
import Card from './Components/Card'
import Lifecycle from './Components/Lifecycle'
import data from './data'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: data,
      i: 0
    }
  }
  handleClick = (e) => {
    if (e.target.name === 'next') {
      this.setState({
        i: this.state.i + 1
      })
    } else {
      this.setState({
        i: this.state.i - 1
      })
    }
  }
  render() {
    return (
      <div className="App" >
        <Lifecycle/>
        {<Card person={this.state.people[this.state.i]} />}
        <button name="next" onClick={this.handleClick}>Next</button>
        <button name="previous" onClick={this.handleClick}>Previous</button>
      </div>
    );
  }
}
export default App;
