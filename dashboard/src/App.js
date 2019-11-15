import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/layout/Navbar';
import List from './components/List';
import Form from './components/Form';
import View from './components/View';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
              <Route exact path="/" component={List}/>
              <Route exact path="/scan" component={Form}/>
              <Route exact path="/scan/:id" component={View} />
          </Switch>
         </div>
      </Fragment>
    </Router>
  );
}

export default App;
