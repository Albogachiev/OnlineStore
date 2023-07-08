import { cat } from "../actions";

export const fetchCategoriesData = () =>{
    return  async function ( dispatch ) {
        await fetch('https://api.escuelajs.co/api/v1/categories')
        .then(res => res.json())
        .then(elem => dispatch(cat(elem)));
    }
}

