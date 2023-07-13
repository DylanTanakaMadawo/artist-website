import React from 'react'
import { PRODUCTS } from '../Data'
import { SingleProduct } from './SingleProduct'
import { ProductsContainer } from '../../Styles'
import { HomeMerch } from '../HomeMerch'

export const Products = () => {
  return (
    <ProductsContainer>
      <HomeMerch />
        {
            PRODUCTS.map((product) => (
                <SingleProduct data={product}/>
            ))
        }
    </ProductsContainer>
  )
}
