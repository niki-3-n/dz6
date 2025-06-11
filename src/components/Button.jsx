import { Component } from 'react';
import './Button.css';

export class Button extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button className="load-more-button" onClick={onClick}>
        Загрузить еще
      </button>
    );
  }
} 