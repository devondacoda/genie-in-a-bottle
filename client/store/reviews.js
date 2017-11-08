import axios from 'axios';

const GET_REVIEWS = 'GET_REVIEWS';
const POST_REVIEW = 'POST_REVIEW';

const getReviews = reviews => ({ type: GET_REVIEWS, reviews });
const postReview = review => ({ type: POST_REVIEW, review });

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

export const createReview = (reviewForm, productId) => (dispatch) => {
  axios
    .post(`/api/review/${productId}`, reviewForm)
    .then(res => res.data)
    .then((result) => {
      console.log('*********', result); // response json from the server!
      const action = postReview(result);
      dispatch(action);
    });
};
