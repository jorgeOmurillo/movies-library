import React from 'react';

export default class MovieForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      genre: props.genre ? props.movie.genre : '',
      name: props.name ? props.movie.name : '',
      image_url: props.image_url ? props.movie.image_url : '',
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

  onImageUrlChange = e => {
    let image_url = e.target.value;
    this.setState(() => ({ image_url }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.name || !this.state.genre || !this.state.image_url) {
      this.setState(() => ({
        error:
          'Please provide a name, image, and a genre for the movie.'
      }));
      return 'Please provide a name, image, and a genre for the movie.';
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        genre: this.state.genre,
        name: this.state.name,
        image_url: this.state.image_url,
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
        <input
          type="text"
          placeholder="Image URL"
          className="text-input"
          value={this.state.image_url}
          onChange={this.onImageUrlChange}
        />
        <div>
          <button className="button">Save Movie</button>
        </div>
      </form>
    );
  }
}
