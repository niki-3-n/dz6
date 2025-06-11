import { Component } from 'react';
import './Searchbar.css';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    if (query.trim()) {
      this.props.onSubmit(query);
    }
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { query } = this.state;

    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Поиск</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Поиск изображений и фото"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
} 