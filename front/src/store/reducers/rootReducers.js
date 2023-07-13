import { combineReducers } from 'redux';
import {products} from './products';
import {categories} from './categories';
export const rootReducer = combineReducers({
  pro: products,
  cat: categories
}); 