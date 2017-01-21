import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import css from './resource.css';

export default function Resource({children,isExternal,link}) {
  const linkElement = isExternal
    ? getExternalLink(link, children)
    : getInternalLink(link, children);
  return <div className={css.resource}>{linkElement}</div>;
}

function getInternalLink(link,text) {
  return <Link to={`members/${link}`}>{text}</Link>;
}

function getExternalLink(link,text) {
  return <a href={link} target="_blank">{text}</a>;
}

Resource.propTypes = {
  link: PropTypes.string.isRequired,
  isExternal: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired
};
