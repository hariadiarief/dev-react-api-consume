import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Instructor from "./components/Instructor";
import MemberList from "./components/MemberList";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/instructor" exact component={Instructor} />
          <Route path="/MemberList" exact component={MemberList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
