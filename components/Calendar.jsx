import React from 'react';
import Menu from './Menu/Menu.jsx';
import {isMobile} from './utility.js';
import css from './calendar.css';

export default function Calendar() {
  const calendarLink = 'https://calendar.google.com/calendar/embed?title=AGDA%20Events%20%26%20Deadlines&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=ja39g1205oba012pbbt1j4ci74%40group.calendar.google.com&amp;color=%23B1440E&amp;src=fna27vp4jdb7sb15d0rqvk5ljs%40group.calendar.google.com&amp;color=%23691426&amp;ctz=America%2FVancouver';
  const deviceHeight = window.innerHeight;
  const iframeLink = <iframe src={calendarLink} width="100%" height={isMobile() ? deviceHeight - 40 : deviceHeight - 54} frameBorder="0" scrolling="no"></iframe>;
  return (
    <div>
      <Menu />
      <div className={isMobile() ? css.container : css.containerDesktop}>
        {iframeLink}
      </div>
    </div>
  );
}
