import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import axios from "axios";

import Home from "./pages/Home";
import Nav from "./components/Nav";

const App  = () => (
<Router>
  <div>
    <Nav/>
    <Switch>
      <Route exact path="/" component = {Home} />
      </Switch>
      </div>
</Router>
);

export default App;
