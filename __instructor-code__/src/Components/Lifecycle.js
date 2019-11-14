import React, {Component} from 'react';

class Lifecycle extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Matt'
        }
    }

    //componentDidMount
    componentDidMount(){
        console.log('componentDidMount Invoked')
        this.setState({
            name: 'Bob Ross'
        })
    }

    //componentDidUpdate
    componentDidUpdate(){
        console.log('componentDidUpdate Invoked')
    }

    render(){
        console.log('Render Invoked')
        return(
            <div>Lifecycle Component</div>
        )
    }
}

export default Lifecycle;