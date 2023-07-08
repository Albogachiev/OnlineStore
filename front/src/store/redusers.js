const initCategories = []
                
                const categoriesRedux = (state = initCategories, action) =>{
                        switch (action.type) {
                            case 'ADD_CATEGORIES' :
                                return {...state.categories, categories:[...state, ...action.payload]};
                        default:
                            return state;
        }
    }

    export {
        categoriesRedux,
    }