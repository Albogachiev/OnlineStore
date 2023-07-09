import React from 'react';
import {useSelector,useDispatch} from  'react-redux';

import Poster from '../Poster/Poster';
import { Products } from '../Products/Products';
import Categories from '../Categories/Categories';
import {fetchProductsData} from '../../store/asyncAction/asyncProducts'


export default function Home() {
    const dispatch = useDispatch();
    dispatch(fetchProductsData())
    const {categories, products} = useSelector((state) => state);
  return (
    <>
    <Poster />
    <Products products={products.products} amount={5} title={'Treding'} />
    <Categories products={categories.categories} amount={5} title={'Worth seeing'} />
    </>
  )
}
