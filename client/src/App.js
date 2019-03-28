import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Main, { About, Contacts, Reserve } from './Main';
import Tours from './Tours';
class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/tours" component={Tours}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contacts" component={Contacts}/>
            <Route exact path="/reserve" component={Reserve}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
