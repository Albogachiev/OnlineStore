const initCategories = []
                
                const categoriesRedux = (state = initCategories, action) =>{
                        switch (action.type) {
                            case 'ADD_CATEGORIES' :
                                return {...state.categories, categories:[...state, ...action.payload]};
                        default:
                            return state;
        }
    }
const productsRedux = (state = [], action) =>{
    switch (action.type) {
        case 'GET_PRODUCTS' : 
        return {...state.products, products:[...state, ...action.payload]}
        default:
            return state;
    }
}

    export {
        categoriesRedux,
        productsRedux
    }