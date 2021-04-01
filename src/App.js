import { Component } from 'react';
import './App.css';
import routes from './routes'

class App extends Component {
  constructor(){
    super()
    this.state = {}
  }

  componentDidMount(){
    console.log('this is componentDidMount on app.js')
  }

  componentDidUpdate(prevProps, prevState){
    // console.log(prevProps, prevState)
    console.log('didUpdate')
    
}

componentWillUnmount(){
    console.log('UnMount in app.js')

}

  render(){
    console.log('render in app.js')
      return (
        <div className="App">
          {routes}
        </div>
      );

  }
}

export default App;
