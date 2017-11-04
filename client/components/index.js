/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export { default as Main } from './main';
export { default as NavBar } from './NavBar';
export { default as UserHome } from './user-home';
export { default as AllProducts } from './all-products';
export { default as SingleProduct } from './SingleProduct';
export { default as Cart } from './Cart';
export { default as CheckoutSuccess } from './CheckoutSuccess';
export { Login, Signup } from './auth-form';
