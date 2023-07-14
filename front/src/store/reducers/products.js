const initCategories = {
    products:[],
    filteredProducts:[],
}
                
export const products = (state = initCategories, action) =>{
    switch (action.type) {
        case 'GET_PRODUCTS' :
            return {...state.products, products:[...action.payload.value]}
        default:
            return state;
    }
}

export const filtProd = ( state = initCategories, action) =>{
    switch (action.type) {
        case 'FILTERED_PRODUCTS' :
            return {...state.filteredProducts, filteredProducts: [...action.payload.value]}
        default:
            return state;
    }
}