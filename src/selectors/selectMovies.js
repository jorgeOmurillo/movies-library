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
        default:
          return movie;
      }
    });
};
