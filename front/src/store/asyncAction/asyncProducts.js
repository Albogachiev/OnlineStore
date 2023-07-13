// import {catDispatch, prodDispatch} from '../index'

// export const fetchCategoriesData = () =>{
//     return  ( dispatch ) => {
//          fetch('https://api.escuelajs.co/api/v1/categories')
//         .then(res => res.json())
//         .then(elem => catDispatch(elem));
//     }
// }
// export const fetchProductsData = () =>{
//     return (dispatch) => {
//         fetch('https://api.escuelajs.co/api/v1/users')
//         .then(res => res.json())
//         .then(item => prodDispatch(item))
//     }
// }
// export const fetchProductsData = () =>{
//     return ( dispatch ) =>{
//          fetch('https://api.escuelajs.co/api/v1/products')
//         .then(res => res.json())
//         .then(product => dispatch(prod(product)))
//     }
// }
// export const filteredPrice = () =>{
//     return (dispatch) => {
//          fetch('https://api.escuelajs.co/api/v1/products')
//         .then(res => res.json())
//         .then(item => dispatch(filtered(item)))
//     }
// }