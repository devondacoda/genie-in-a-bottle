import axios from 'axios';
import history from '../history'

const LOG_IN = 'LOG_IN';
const SIGN_UP = 'SIGN_UP';

const logIn = user => ({ type: LOG_IN, user });
const signUp = user => ({ type: SIGN_UP, user });
const state = {};

export default function reducer (state = {}, action) {
  switch (action.type) {
    case LOG_IN:
      return Object.assign({}, action.user);

    case SIGN_UP:
      return Object.assign({}, action.user);

    default:
      return state;
  }
}

export const authenticate = (userName, email, password, formName) => (dispatch) => {
  if (formName === 'login') {
    axios.post('/auth/login', { email, password })
      .then(user => dispatch(logIn(user.data)))
      .then(() => history.push('/'))
      .catch(console.error);
  } else {
    axios.post('/auth/signup', { userName, email, password })
      .then(user => dispatch(signUp(user.data)))
      .then(() => history.push('/'))
      .catch(console.error);
  }
};
