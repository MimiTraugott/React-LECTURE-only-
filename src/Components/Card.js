import React, { Component } from 'react'//we imported react component 

class Card extends Component { //set a class component that requires you to extend the react component and create a render function that returns a react element
    constructor(props) { //constructor metiod that automatically called during the creation of the object from class. it aids in constructing things.  helps initialize local state and it is fired before the component is mounted. sets state. 
        super(props) // super is used to access and call functions on the objects parent
    }
    render() { //will render and display of the comonents. MUST be included if you have a claass component
        let person = this.props.person // we destructred person, to keep our code dry
        return (
            <div className="card-wrapper">
                <h2>{person.name.first} {person.name.last}</h2>
                <h3>City: {person.city}</h3>
                <h3>Country: {person.country}</h3>
                <h3>Employer: {person.employer}</h3>
                <h3>Title: {person.title}</h3>
                {person.favoriteMovies.map(e => <p key={e}>{e}</p>)}
            </div>
        )
    }
}

export default Card //exported Card to be imported elsewhere

// LINE 10 ^^ created a div with the classname cardwrapper, to wrap our elements in.
// LINE 11 ^^ created an h2 element to display our data, which we passed to card via props.  it will display this.props.person.name.first as well as this.props.person.name.last all on the same line.
// LINE 12-15 we created several headers to display the data which we passed in via props. it will display this.props.city, country, employer and title
// LINE 16 there is no header or div, but it will display the data we passed in via props, via person.favoriteMovies and map through the array of objects. 

