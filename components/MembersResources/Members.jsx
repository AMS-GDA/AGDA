import React from 'react';
import css from './members.css';
import Menu from '../Menu/Menu.jsx';
import Resource from './Resource.jsx';
import * as links from './ExternalLinks.js';

export default function Members() {
    return (
        <div className={css.container}>
            <Menu />
            <div className={css.header}>
                <p className={css.title}>AGDA Member Resources</p>
                <p className={css.subtitle}>
                    Members subtitle ~ wow much great such nice
                </p>
            </div>
            <div className={css.content}>
                <Resource link={links.AUDIO} isExternal={true}>
                    {'Do you need to borrow audio recording equipment?'}
                    {'Click here to visit the request form'}
                </Resource>
                <Resource link="teams" isExternal={false}>
                    {'Are you looking for a team to join or looking for another member for your team?'}
                    {'Click here to visit the team search page'}
                </Resource>
                <Resource link={links.STARTER} isExternal={true}>
                    {'New to AGDA?'}
                    {'Click here to see the starter pack'}
                </Resource>
                <Resource link="agreement-faq" isExternal={false}>
                    {'Do you have questions regarding the team agreement?'}
                    {'Click here to see the agreement\'s FAQ'}
                </Resource>
                <Resource>
                    {'Did you miss a workshop?'}
                    {
                        <span>
                            <span>
                                <a href={links.WORK_DAN} target="_blank">Unity 3D</a> by
                                <a href="http://www.danielsnd.com/" target="_blank">Daniel Snd</a>
                            </span>
                            <a href={links.WORK_TRELLO} target="_blank">Task management
                                with Trello</a>
                            <a href={links.WORK_GIT} target="_blank">Code management
                                with Git (Introduction)</a>
                            <a href={links.WORK_GIT_TREE} target="_blank">Code management
                                with Git (SourceTree GUI)</a>
                        </span>
                    }
                </Resource>
                <Resource link={links.TBT} isExternal={true}>
                    {'#TBT - remember the time you came to our icebreaker?'}
                    {'Click here to see the slides'}
                </Resource>
            </div>
        </div>
    );
}
