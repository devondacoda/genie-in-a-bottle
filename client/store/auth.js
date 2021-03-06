import axios from 'axios';
import history from '../history';
import { getCurrentCart } from './order';
import { me } from './';

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

export const authenticate = (email, password, formName, name) => (dispatch) => {
  if (formName === 'login') {
    axios.post('/auth/login', { email, password })
      .then(user => dispatch(logIn(user.data)))
      .then(() => dispatch(getCurrentCart()))
      .then(() => dispatch(me()))
      .then(() => history.push('/'))
      .catch(console.error);
  } else {
    axios.post('/auth/signup', { name, email, password })
      .then(user => dispatch(signUp(user.data)))
      .then(() => history.push('/'))
      .catch(console.error);
  }
};
