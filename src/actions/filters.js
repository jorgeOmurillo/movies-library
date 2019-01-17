// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// FILTER_BY_REGION
export const filterByRegion = (filterBy = '') => ({
  type: 'FILTER_BY_REGION',
  filterBy
});
