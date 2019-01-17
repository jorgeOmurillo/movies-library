import React from 'react';

export default class MovieForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genre: props.genre ? props.movie.genre : '',
      name: props.name ? props.movie.name : '',
      error: ''
    };
  }

  onNameChange = e => {
    let name = e.target.value;
    this.setState(() => ({ name }));
  };

  onGenreChange = e => {
    let genre = e.target.value;
    this.setState(() => ({ genre }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.name || !this.state.genre) {
      this.setState(() => ({
        error:
          'Please provide a name and a genre for the movie.'
      }));
      return 'Please provide a name and a genre for the movie.';
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        genre: this.state.genre,
        name: this.state.name,
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Name"
          autoFocus
          className="text-input"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <select
          placeholder="Region"
          className="select"
          value={this.state.genre}
          onChange={this.onGenreChange}
        >
          <option value="">Genre...</option>
          <option value="Action">Action</option>
        </select>
        <div>
          <button className="button">Save Movie</button>
        </div>
      </form>
    );
  }
}
