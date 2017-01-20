import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import css from './members.css';

export default function Resource({children,isExternal,link}) {
    let linkElement = '';
    if(link) {
        linkElement = isExternal
            ? getExternalLink(link, children[1])
            : getInternalLink(link, children[1]);
    }
    else {
        linkElement = children[1];
    }
    return (
        <div className={css.resource}>
            <p>{children[0]}</p>
            <div className={css.link}>{linkElement}</div>
        </div>
    );
}

function getInternalLink(link,text) {
    return <Link to={`members/${link}`}>{text}</Link>;
}

function getExternalLink(link,text) {
    return <a href={link} target="_blank">{text}</a>;
}

Resource.defaultProps = {
    link: null,
    isExternal: true
};

Resource.propTypes = {
    link: PropTypes.string,
    isExternal: PropTypes.bool,
    children: PropTypes.array.isRequired
};
