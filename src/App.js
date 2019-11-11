import React, { Component } from "react";
import "./styles/main.css";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <Switch></Switch>;
  }
}

export default App;
