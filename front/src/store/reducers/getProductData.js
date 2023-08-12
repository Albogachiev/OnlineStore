const initGetProduct = {
    getProduct:[]
}

export const getProductData = (state = initGetProduct, action) => {
    switch(action.type){
        case 'GET_PRODUCT_DATA': 
            return {...state.getProduct, getProduct:[ action.payload.value ]}
            default: 
            return state
    }
}