import React from 'react';
import css from './members.css';
import Menu from '../Menu/Menu.jsx';
import Resource from './Resource.jsx';
import ResourceExpandable from './ResourceExpandable.jsx';
import * as links from './ExternalLinks.js';

export default function Members() {
  return (
    <div className={css.container}>
      <Menu />
      <div className={css.content}>
        <div className={css.title}>Well, hello there!<br/>What brings you here today?</div>
        <Resource link={links.AUDIO} isExternal={true}>
          {'I need to borrow audio recording equipment'}
        </Resource>
        <Resource link="teams" isExternal={false}>
          {'I\'m looking for a team to join or looking for another member for my team'}
        </Resource>
        <Resource link={links.STARTER} isExternal={true}>
          {'I\'m new to AGDA, or I just want to see the starter pack'}
        </Resource>
        <Resource link="agreement-faq" isExternal={false}>
          {'I have questions regarding the team agreement'}
        </Resource>
        <ResourceExpandable>
          {'I missed a workshop'}
          {workshop}
        </ResourceExpandable>
        <Resource link={links.TBT} isExternal={true}>
          {'#TBT - remember the time you came to our icebreaker?'}
        </Resource>
      </div>
    </div>
  );
}

function workshop() {
  return (
    <div className={css.workshop}>
      <span>
        <a href={links.WORK_DAN} target="_blank">Unity 3D</a> by
        <a href="http://www.danielsnd.com/" target="_blank">Daniel Snd</a>
      </span>
      <a href={links.WORK_TRELLO} target="_blank">Task management with Trello</a>
      <a href={links.WORK_GIT} target="_blank">Code management with Git (Introduction)</a>
      <a href={links.WORK_GIT_TREE} target="_blank">Code management with Git (SourceTree GUI)</a>
    </div>
  );
}
