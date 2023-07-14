const cat = (value) => ({type: 'GET_CATEGORIES', payload:{value}});
const prod = (value) => ({type: 'GET_PRODUCTS', payload:{value}});
const filPro = (value) => ({type: 'FILTERED_PRODUCTS', payload:{value}})


export const categories = ( ) => {
    return (dispatch) =>{
        fetch('https://api.escuelajs.co/api/v1/categories')
       .then(res => res.json())
       .then(elem => dispatch(cat(elem)));
    }
}

export const products = ( ) => {
    return (dispatch) =>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(elem => dispatch(prod(elem)))
    }
}

export const filtPrice = (sum) => {
    return (dispatch) => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(elem =>  elem.filter((el) => el.price < sum))
        .then((el) =>  dispatch(filPro(el)))
    }
};