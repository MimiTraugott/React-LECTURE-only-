import React, { Component } from 'react'
export default class Card extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let person = this.props.person
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