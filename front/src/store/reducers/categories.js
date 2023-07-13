const initCategories = {
    categories:[]
};

export const categories = (state = initCategories, action) =>{
    switch (action.type) {
        case 'GET_CATEGORIES' :
            return {...state.categories, categories: [...action.payload.value]}
        default : 
            return state;
    }
}