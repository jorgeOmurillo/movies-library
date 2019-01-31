import React from 'react';

export default class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    const year = new Date().getFullYear();
    this.years = Array.from(new Array(120), (val, index) => year - index);

    this.state = {
      genre: props.movie ? props.movie.genre : '',
      name: props.movie ? props.movie.name : '',
      image_url: props.movie ? props.movie.image_url : '',
      year: props.movie ? props.movie.year : '',
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

  onYearChange = e => {
    let year = e.target.value;
    this.setState(() => ({ year }));
  };

  onImageUrlChange = e => {
    let image_url = e.target.value;
    this.setState(() => ({ image_url }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.name || !this.state.genre || !this.state.image_url) {
      this.setState(() => ({
        error: 'Please provide a name, image, and a genre for the movie.'
      }));
      return 'Please provide a name, image, and a genre for the movie.';
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        genre: this.state.genre,
        name: this.state.name,
        image_url: this.state.image_url,
        year: this.state.year
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
          placeholder="Genre"
          className="select"
          value={this.state.genre}
          onChange={this.onGenreChange}
        >
              <option value="">Genre...</option>
              <option value="Action">Action</option>
              <option value="Animation">Animation</option>
              <option value="Adventure">Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Drama">Drama</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Thriller">Thriller</option>
        </select>
        <input
          type="text"
          placeholder="Image URL"
          className="text-input"
          value={this.state.image_url}
          onChange={this.onImageUrlChange}
        />
        <select
          placeholder="Year"
          className="select"
          value={this.state.year}
          onChange={this.onYearChange}
        >
          {this.years.map((year, index) => (
            <option key={`year${index}`} value={year}>
              {year}
            </option>
          ))}
        </select>
        <div>
          <button className="button">Save Movie</button>
        </div>
      </form>
    );
  }
}
