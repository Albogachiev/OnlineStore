import { cat } from "../actions";
import {prod} from '../actions'

export const fetchCategoriesData = () =>{
    return  async function ( dispatch ) {
        await fetch('https://api.escuelajs.co/api/v1/categories')
        .then(res => res.json())
        .then(elem => dispatch(cat(elem)));
    }
}

export const fetchProductsData = () =>{
    return async function ( dispatch ) {
        await fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(product => dispatch(prod(product)))
    }
}
