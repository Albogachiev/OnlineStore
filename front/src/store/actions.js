const cat = (value) => ({type: 'GET_CATEGORIES', payload:{value}});
const prod = (value) => ({type: 'GET_PRODUCTS', payload:{value}});


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
        .then(elem => dispatch(prod(elem)));
    }
}








// export const signUpThunk = ( { email, username, password }, navigate) => {
//     return async (dispatch) => {
//         try {
//           const obj = { email, username, password };
//           const response = await fetch('
//   http://localhost:3001/api/signup
//   ', {
//             method: 'POST',
//             credentials: 'include',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(obj),
//           });
  
//           const data = await response.json();
//           if (data.message) {
//             dispatch(addAdmin({ username: data.username, email: 
//   data.email
//    }));
//             navigate('/');
//           }
//           if (data.emailExists) {
//             alert(data.emailExists);
//           }
//         } catch (err) {
//           console.log('=========>>>>', err);
//         }
        
//       };
//   } 