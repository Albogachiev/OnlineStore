import { combineReducers } from 'redux';
import {products, filtProd} from './products';
import {categories} from './categories';
import {getProductData} from './getProductData';
export const rootReducer = combineReducers({
  pro: products,
  cat: categories,
  fil: filtProd,
  get:getProductData,
}); 