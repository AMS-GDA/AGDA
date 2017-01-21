import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';
import css from './resource.css';

export default class ResourceExpandable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const isExpanded = !this.state.isExpanded;
    this.setState({isExpanded});
  }

  render() {
    const {children} = this.props;
    const {isExpanded} = this.state;
    const className = classnames(css.bar, isExpanded ? css.close : '');
    return (
      <div className={css.resource}>
        <div className={css.expandTitle} onClick={this.handleClick}>
          <div className={css.icon}>
            <div className={className}></div>
            <div className={className}></div>
          </div>
          {children[0]}
        </div>
        {isExpanded ? children[1]() : null}
      </div>
    );
  }
}

ResourceExpandable.propTypes = {
  children: PropTypes.array.isRequired
};
