// Get visible distributors
export default (movies, { text, filterBy }) => {
  return movies
    .filter(movie => {
      const textMatch = movie.name
        .toLowerCase()
        .includes(text.toLowerCase());

      return textMatch;
    })
    .filter(movie => {
      switch (filterBy) {
        case 'action':
          return movie.genre === 'Action';
        case 'animation':
          return movie.genre === 'Animation';
        case 'adventure':
          return movie.genre === 'Adventure';
        case 'comedy':
          return movie.genre === 'Comedy';
        case 'crime':
          return movie.genre === 'Crime';
        case 'drama':
          return movie.genre === 'Drama';
        case 'fantasy':
          return movie.genre === 'Fantasy';
        case 'horror':
          return movie.genre === 'Horror';
        case 'romance':
          return movie.genre === 'Romance';
        case 'science_fiction':
          return movie.genre === 'Science Fiction';
        case 'thriller':
          return movie.genre === 'Thriller';
        default:
          return movie;
      }
    });
};
