// Distributors Reducer
const distributorsReducerDefaultState = [];

export default (state = distributorsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DISTRIBUTOR':
      return [...state, action.distributor];
    case 'REMOVE_DISTRIBUTOR':
      return state.filter(({ _id }) => _id !== action.id);
    case 'EDIT_DISTRIBUTOR':
      return state.map(distributor => {
        if (distributor._id === action.id) {
          return {
            ...distributor,
            ...action.updates
          };
        } else {
          return distributor;
        }
      });
    case 'SET_DISTRIBUTORS':
      return action.distributors;
    default:
      return state;
  }
};
