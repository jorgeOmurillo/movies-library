//Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'genre',
  genre: ''
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'FILTER_BY_GENRE':
      return {
        ...state,
        filterBy: action.filterBy
      };
    case 'SET_GENRE':
      return {
        ...state,
        genre: action.genre
      };
    default:
      return state;
  }
};
