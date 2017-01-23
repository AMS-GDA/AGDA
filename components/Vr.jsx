import React from 'react';
import css from './vr.css';
import Menu from './Menu/Menu.jsx';

export default function Vr() {
  return (
    <div>
      <Menu />
      <section className={css.main}>
        <div className={css.wrapper}>
          <p className={css.welcome}>Welcome to the</p>
          <header className={css.mainHeader}>AGDA VR Division</header>
          <div className={css.signup}>
            <p><a href="https://goo.gl/forms/QCd8ayp6Qv0EFkzi1" target="_blank">
              Sign up here to receive updates!
            </a></p>
          </div>
        </div>
      </section>
      {explain()}
      {pros()}
      {requirements()}
      {contact()}
    </div>
  );
}

function explain() {
  return (
    <section id="pitch" className={css.pitch}>
      <div className={css.wrapper}>
        <p className={css.header}>Interested in working with virtual reality?</p>
        <div className={css.introduction}>
          <p>
            Faculties across UBC are getting involved with VR in the classroom and
            in their field (think anywhere from linguistics to geography to math).
            The integration of VR into education is just beginning and AGDA wants
            students involved in this effort.
          </p>
          <p>We are calling out to anyone who is interested in VR development!</p>
          <p>Experience is not necessary. We will prioritize applicants with passion and a willingness to learn!</p>
        </div>
      </div>
    </section>
  );
}

function pros() {
  return (
    <section id="pros" className={css.pros}>
      <div className={css.wrapper}>
        <p className={css.header}>Why consider joining</p>
        <ul className={css.prosList}>
          <li>Interesting and cool personal projects</li>
          <li>Collaborations with UBC faculties, professors, and students</li>
          <li>Develop for VR with access to high-end VR hardware (HTC Vive and Microsoft HoloLens)</li>
          <li>Experience working with a team to make an impactful project</li>
          <li>A possibility to evolve the project into a grant project (depending on faculty)</li>
          <li>Learn Unity and/or VR asset creation through hands-on experience</li>
          <li>Be involved in an ongoing discussion about VR in education</li>
        </ul>
      </div>
    </section>
  );
}

function requirements() {
  return (
    <section id="require" className={css.require}>
      <div className={css.wrapper}>
        <p className={css.header}>Requirements for joining</p>
        <ul className={css.requireList}>
          <li>Sign up as a member of AGDA (required for an AMS club)</li>
          <li>Able to attend <strong>weekly</strong> meetup: <strong>Thursday 5-7 PM</strong>
            (Let us know if this does not work)</li>
          <li>Time Commitment:  8 - 10 hours per week, including the meetup</li>
          <li>Able to commit to tasks you have agreed to take on</li>
          <li>Experience in VR is preferable, otherwise willingness to learn is a must!</li>
        </ul>
      </div>
    </section>
  );
}

function contact() {
  return (
    <section id="contact" className={css.contact}>
      <div className={css.wrapper}>
        <p className={css.header}>Do you have questions?</p>
        <div className={css.introduction}>
          <p>
            Feel free to contact us through
            <a href="mailto:vr@amsgda.com">vr@amsgda.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
