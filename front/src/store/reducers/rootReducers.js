import { combineReducers } from 'redux';
import {products, filtProd} from './products';
import {categories} from './categories';
export const rootReducer = combineReducers({
  pro: products,
  cat: categories,
  fil: filtProd,
}); 