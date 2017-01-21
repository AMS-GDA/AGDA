import React, {Component} from 'react';
import css from './home.css';
import Menu from './Menu/Menu.jsx';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWord: 0
    };
    this.switchWord = this.switchWord.bind(this);
  }

  componentDidMount() {
    const self = this;
    setTimeout(() => {
      self.switchWord();
      setTimeout(() => {
        self.switchWord();
        clearTimeout();
      }, 1500);
    }, 1500);
  }

  switchWord() {
    const showWord = this.state.showWord + 1;
    this.setState({showWord});
  }

  render() {
    const {showWord} = this.state;
    let word = showWord === 0 ? 'Love' : showWord === 1 ? 'Play' : 'Make';
    return (
      <div>
        <Menu />
        <div className={css.intro}>We {word} Games</div>
      </div>
    );
  }
}
