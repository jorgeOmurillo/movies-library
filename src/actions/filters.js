// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// FILTER_BY_GENRE
export const filterByGenre = (filterBy = '') => ({
  type: 'FILTER_BY_GENRE',
  filterBy
});
