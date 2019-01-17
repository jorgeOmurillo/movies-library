//Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'region',
  region: ''
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'FILTER_BY_REGION':
      return {
        ...state,
        filterBy: action.filterBy
      };
    case 'SET_REGION':
      return {
        ...state,
        region: action.region
      };
    default:
      return state;
  }
};
