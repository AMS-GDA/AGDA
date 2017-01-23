import React, {Component} from 'react';
import Menu from '../Menu/Menu.jsx';
import Exec from './Exec.jsx';
import {PEOPLE} from './Execs.js';
import css from './about.css';

export default class About extends Component {
  render() {
    return (
      <div className={css.wrapper}>
        <Menu />
        <div className={css.content}>
          <div className={css.title}>About AGDA</div>
          <div className={css.contentText}>
            Hi there! We're AGDA , a student-run game development team here at UBC.
            Every year, we get together and make new games, mixing in our collective
            talent and creative efforts to make a fun, engaging game that's hard
            to put down. Our goal is to work towards expanding our knowledge of
            the tools, techniques, and processes used in video game development.
            Speakers from the industry also come in and do Q&As. We also host an
            annual Vancouver game jam!<br/>Can you code? Illustrate? Make music?
            Love games? Join us! We accept anyone willing to contribute. If you
            aren’t a pro then here’s your chance to become one. Even if you'd
            rather play games than make them, there is still a place for you here.
            <br/><strong>
            <a href="http://eepurl.com/b-6aWz">Sign up for our newsletter</a></strong>
            <br/>or<br/><strong><a href="mailto:info@amsgda.com">email us </a></strong>
            to get information on how to formally join the club
          </div>
        </div>
        <div className={css.team}>
          <div className={css.title}>The Team</div>
          <div className={css.execs}>
            {
              PEOPLE.map((person) => {
                return <Exec key={person.name} person={person} />;
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
