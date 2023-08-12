import React from 'react';
import {useSelector,useDispatch} from  'react-redux';

import {Poster} from '../Poster/Poster';
import { Products } from '../Products/Products';
import {Categories} from '../Categories/Categories';
import {Banner} from '../Banner/Banner';
import {products, categories, filtPrice} from '../../store/actions';

export default function Home() {
    const dispatch = useDispatch();
    React.useEffect(() => {
      dispatch(products())
      dispatch(categories())
      if(!products().length)return;
      dispatch(filtPrice(100))
    }, [])
    
    const data = useSelector((state) => state)
    
  return (
    <>
    <Poster />
    <Products products={data.pro} amount={5} title={'Treding'} />
    <Categories products={data.cat} amount={5} title={'Worth seeing'} />
    <Banner products={data.pro} amount={5} title={'Less than 100$'} />
    </>
  )
}
