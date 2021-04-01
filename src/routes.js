import {Switch, Route} from 'react-router-dom'
import Lifecycle from './components/Lifecycle'
import Main from './components/Main'

export default (
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/lifecycle/:lifecycleParams' component={Lifecycle}/>
        
    </Switch>
)
