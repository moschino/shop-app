import React from 'react'
import { ProductItem } from '../../products'
import './product.css'


type ProductItemProps = {
    item: ProductItem;
}

export const Product = ({
    item
}: ProductItemProps) => {
  return (
    <div className='product'>
        <img src={item.imageUrl} />
        <div className='description'>
            <p><b>{item.name}</b></p>
            <p>${item.price}</p>
        </div>
    </div>
  )
}
