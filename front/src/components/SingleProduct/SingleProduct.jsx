import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Products/Product';
import { useSelector, useDispatch } from 'react-redux';
import { productsId } from '../../store/actions'

function SingleProduct({}) {
  const { id } = useParams()

  const dispatch = useDispatch()
  React.useEffect(() =>{
    dispatch(productsId(id))
  },[])
  
  let data = useSelector((el) => el)

  return (
    <>
      < Product  data={data.get.getProduct[0]} />
    </>
  )
}

export default SingleProduct;