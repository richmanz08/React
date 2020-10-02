import React, { Component } from "react";
import { Route } from "react-router-dom";
import PageAversion2 from "./PageAversion2";
import PageBversion2 from "./PageBversion2";
import UserScreen from "./UserScreen";
import input from "./input";
class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact={true} component={PageAversion2} />
        <Route path="/PageAversion2" exact={true} component={PageAversion2} />
        <Route path="/navuser" component={UserScreen} />
        <Route path="/PageBversion2" exact={true} component={PageBversion2} />
        <Route path="/input" exact={true} component={input} />
        <Route path="/process" exact={true} component={PageBversion2} />
      </div>
    );
  }
}
export default App;
