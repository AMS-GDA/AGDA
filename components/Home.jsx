import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return <h1><Link to="calendar">Click here to go to calendar</Link></h1>
  }
}
