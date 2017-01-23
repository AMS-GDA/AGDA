import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Home from './components/Home.jsx';
import Calendar from './components/Calendar.jsx';
import Vr from './components/Vr.jsx';
import About from './components/About/About.jsx';
import Members from './components/MembersResources/Members.jsx';
import Teams from './components/MembersResources/Teams.jsx';
import AgreementFaq from './components/MembersResources/AgreementFaq.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/calendar" component={Calendar} />
    <Route path="/vr" component={Vr} />
    <Route path="/about" component={About} />
    <Route path="/members" component={Members} />
    <Route path="/members/teams" component={Teams} />
    <Route path="members/agreement-faq" component={AgreementFaq} />
  </Router>,
  document.getElementById('home')
);
