import React, { useContext } from 'react'
import { CartItemsContext, getTotalCartAmount } from '../../context/shop-context'
import { json } from 'stream/consumers';
import { CurrencyDollar } from 'phosphor-react';

export const Cart = () => {
  const cartItems = useContext(CartItemsContext);
  const totalAmount = cartItems ? getTotalCartAmount(cartItems) : 0;
  
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {JSON.stringify(cartItems)}
      </div>

      {totalAmount > 0 ? (
        <h2>Total Amount ${totalAmount}</h2>
      ) : <h2>Your Shopping Cart is Empty</h2>}
    </div>
  )
}
