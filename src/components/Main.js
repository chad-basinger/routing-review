import React from 'react'
import {Link} from 'react-router-dom'

class Main extends React.Component {
    constructor() {
    super()
    this.state = {}
    }

    render(){
        console.log('this is props from main.js', this.props)
        return (
            <div>
                <h1>
                    This is the Main Component
                </h1>
                <Link to='/lifecycle/myParam'>
                    <button>Go To the Lifecycle Component</button>
                </Link>
            </div>
        )
    }
}

export default Main;