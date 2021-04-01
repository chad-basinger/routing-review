import React from 'react'
import {Link} from 'react-router-dom'

class Lifecycle extends React.Component {
    constructor() {
    super()
    this.state = {
        leadingThisReview: undefined
    }
    }

    componentDidMount(){
        console.log('didMount in lifecycle.js')

    }

    componentDidUpdate(){
        console.log('didUpdate in lifecycle.js')

    }

    componentWillUnmount(){
        console.log('WillUnmount in lifecycle.js')

    }

    updateState = () => {
        this.setState({leadingThisReview: 'Chad Basinger'})
    }

    render(){
        console.log('render in lifecycle.js')
        return (
            <div>
                <h1>
                    This is the Lifecycle Component
                </h1>
                <Link to='/'>
                    <button>Go To the Main Component</button>
                </Link>
                <button onClick={this.updateState}>Update State</button>
            </div>
        )
    }
}

export default Lifecycle;