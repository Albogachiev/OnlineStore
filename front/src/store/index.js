import { composeWithDevTools } from "redux-devtools-extension"; //расширения 
import {categoriesRedux,productsRedux} from './redusers';
import thunk from 'redux-thunk'

import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
const rootReduser = combineReducers({
    categories:categoriesRedux,
    products:productsRedux
})

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));