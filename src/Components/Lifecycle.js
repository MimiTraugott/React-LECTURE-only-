import React, {Component} from 'react'

class Lifecycle extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Mimi'
        }
    }

    //componentDidMount
    //^^will fire after renders initial invokation 
    componentDidMount (){
        console.log('componentDidMount Invoked')
        this.setState ({
            name: 'Bob Ross'
        })
    }

    // componentDidUpdate
    componentDidUpdate(){
        console.log('componentDidUpdate Invoked')
    }
    render(){
        console.log("render invoked")
        return (
            <div>LifeCycle Component</div>

        )
    }
}
export default Lifecycle