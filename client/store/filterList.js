const SEARCH = 'SEARCH';
const searchProducts = filterProducts => ({ type: SEARCH, filterProducts });

export default function reducer(state = [], action) {
  switch (action.type) {
    case SEARCH:
      return action.filterProducts;
    default:
      return state;
  }
}

export const fetchSearch = foundProducts => (dispatch) => {
  const action = searchProducts(foundProducts);
  dispatch(action);
};
