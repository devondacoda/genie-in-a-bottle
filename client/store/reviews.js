import axios from 'axios';

const GET_REVIEWS = 'GET_REVIEWS';

const getReviews = reviews => ({ type: GET_REVIEWS, reviews });

export default function (state = [], action) {
  switch (action.type) {
    case GET_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
}

export const fetchReviews = product => (dispatch) => {
  axios.get(`/api/review/${product}`).then((res) => {
    dispatch(getReviews(res.data));
  });
};
