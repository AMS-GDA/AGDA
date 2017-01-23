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
        <div className={css.execs}>
          {
            PEOPLE.map((person) => {
              return <Exec key={person.name} person={person} />;
            })
          }
        </div>
      </div>
    );
  }
}
