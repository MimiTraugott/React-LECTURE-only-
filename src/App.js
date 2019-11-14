import React, {Component} from 'react';
import './App.css';
import Card from './Components/Card'
import data from './data'

class App extends Component {
  constructor(){
    super()
    this.state = {
      people: data,
      i: 0
    }
  }
  handleClick =() => {
    this.setState({
      i: this.state + 1
    })
  }

  render(){
  return (
    <div className="App">
      {<Card person = {this.state.people[this.state.i]} />}  
      <button onClick = {this.handleClick}>Next</button>  
      <button onClick = 
      </div>
  );
  }
}

export default App;
