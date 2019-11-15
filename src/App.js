import React from 'react';//imports react component
import './App.css';//imports file app.css
import Card from './components/Card'//imports card child file
import data from './data'//imports data child file, and placed in state

class App extends React.Component { //class component that requires you to exend from react.component and create a render function which returns a react element.  
  constructor(props) {//method automatically called during the creation of an object from class. it aids in constructing things. helps initialize local state it is fired before the component is mounted. sets state
    super(props)// used to access and call functions on the objects parent
    this.state = { 
    people: data,
    i: 0
    //^^^we set state in a class component to be able to store data. in this example we are setting state, which is an object, and setting it equal to the property/key of people to equal data, and i[index] to start at zero. this contains our data.
    }
  }
  handleClick = (e) => {//arrow function created so that we do not have to bind 
    if (e.target.name === 'next') { //logic. if e.target.name === 'next'
      this.setState({ //change the instance of state to
        i: this.state.i + 1 //i this.state.i + 1. this CHANGES STATE
      })
    } else { //else
      this.setState({ // change the instance of STATE to 
        i: this.state.i - 1 // i this.state.i -1. this CHANGES STATE
      })
    }
  }
  //^^ state values can be changed using the setState method, which is built into react. 

  render() {//will render the display of the components. MUST be included in class components
    return ( //returns the display of components , stops the execution of a function and returns a valuye from the funtion. in this case, the render function. 
      <div className="App" > 
        {<Card person={this.state.people[this.state.i]} />}
        <button name="previous" onClick={this.handleClick}>Previous</button>
        <button name="next" onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}
export default App;//exports your component to be imported elsewhere

// LINE 30 ^^^we kept a div, with a className of a App above.  this comes automatically included in the create-react-app }

// LINE 31 ^^^we invoked/referenced/returned the instance of the card component in the return of our render function. PERSON is a PROP we declared in our parent or App.js component.  the card component is EXPECTING it. see line 8 on card.js. it has been destructured for ease. The prop PERSON that we declared, is set to equal to THIS.STATE.PEOPLE which is an array and then this.state.i would be the index of the array.  It references the components state. this like literally says "person is a prop that will be passed onto the card component, and will have the value of this.state.people at the index of this.state.i.  if we we were to ask what is the value of this.state.i right now, it would be zero.--- so this.state.people === this.state.people[0]

// LINE 32 and 33 ^^ we created a couple buttons to handle our functionality and logic above, which set set to name= previous or next. we use this to fire the handleClick function above on line 15, that will do our logic. onClick, we will fire the this. handleClick function that states that if the event of click, at the target of the button === 'next', then we will move to the next ideration of i in the array. or array +1(which will move us to the next object on the array)  ELSE with the event of click, at target of the button does NOT equal next, we will decrease the ideration of i on the array.