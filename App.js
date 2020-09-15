import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PageA from './PageA'
import PageB from './PageB'
import UserScreen from "./UserScreen"


class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact={true} component={PageA} />
        <Route path="/PageA" exact={true} component={PageA} />
        <Route  path="/PageB"  component={PageB} />
        <Route path="/navuser"  component={UserScreen}/>
      </div>
    )
  }
}
export default App

