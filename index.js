import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/Home.jsx';
import Calendar from './components/Calendar.jsx';
import Vr from './components/Vr.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu/Menu.jsx';

const router = (
    <Router history={browserHistory}>
        <Route name="home" path="/" component={Home} />
        <Route name="calendar" path="/calendar" component={Calendar} />
        <Route name="vr" path="/vr" component={Vr} />
        <Route name="about" path="/about" component={About} />
    </Router>
);

ReactDOM.render(
    <div>
        <Menu />
        {router}
    </div>,
    document.getElementById('home')
);
