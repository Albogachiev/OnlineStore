const initCategories = {
    products:[],
}
                
export const products = (state = initCategories, action) =>{
    switch (action.type) {
        case 'GET_PRODUCTS' :
            return {...state.products, products:[...action.payload.value]}
        default:
            return state;
    }
}