import React, {Component, PropTypes} from 'react';
import css from './exec.css';

const EMAILLOGO = 'https://res.cloudinary.com/amsgda/image/upload/v1485133647/logos/email.png';
const LINKEDINLOGO = 'https://res.cloudinary.com/amsgda/image/upload/v1485133647/logos/linkedin.png';
const GITHUBLOGO = 'https://res.cloudinary.com/amsgda/image/upload/v1485133647/logos/github.png';

export default class Exec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };
    this.enableHoverState = this.enableHoverState.bind(this);
    this.disableHoverState = this.disableHoverState.bind(this);
  }

  enableHoverState() {
    this.setState({isHover: true});
  }

  disableHoverState() {
    this.setState({isHover: false});
  }

  getExistingLinksOnly(contact) {
    const linkedinLink = (
      contact.linkedin === '' ? null :
      <a href={contact.linkedin} className={css.linkedin} target="_blank">
        <img className={css.logo} src={LINKEDINLOGO} />
      </a>
    );
    const githubLink = (
      contact.github === '' ? null :
      <a href={contact.github} className={css.github} target="_blank">
        <img className={css.logo} src={GITHUBLOGO} />
      </a>
    );

    return (
      <div className={css.links}>
        <a href={contact.email} className={css.email} target="_blank">
          <img className={css.logo} src={EMAILLOGO} />
        </a>
        {linkedinLink}
        {githubLink}
      </div>
    );
  }

  render() {
    const {person} = this.props;
    const {isHover} = this.state;
    return (
      <div className={css.exec}>
        <div className={css.imageContainer}>
          <div className={css.imageWrapper}>
              <img className={css.image}
                onMouseOver={this.enableHoverState}
                onMouseLeave={this.disableHoverState}
                src={isHover ? person.funshot : person.shot} />
          </div>
        </div>
        <div className={css.infoWrapper}>
          <div className={css.info}>
            <div className={css.name}>{person.name}</div>
            <div className={css.position}>{person.position}</div>
          </div>
          {this.getExistingLinksOnly(person.contact)}
        </div>
      </div>
    );
  }
}

Exec.propTypes = {
  person: PropTypes.object.isRequired
};
