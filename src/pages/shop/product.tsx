import React, { useContext, useReducer, Dispatch } from 'react'
import { ProductItem } from '../../products'
import './product.css'
import { useCartItemsDispatch } from '../../context/shop-context'


type ProductItemProps = {
    item: ProductItem;
}

export const Product = ({
    item
}: ProductItemProps) => {
  const dispatch = useCartItemsDispatch();
  return (
    <div className='product'>
        <img src={item.imageUrl} />
        <div className='description'>
            <p><b>{item.name}</b></p>
            <p>${item.price}</p>
        </div>
        <button className='addToCartBtn' onClick={() => {
          dispatch({
            type: 'add',
            item: item
          })
        }}>Add To Cart</button>
    </div>
  )
}
