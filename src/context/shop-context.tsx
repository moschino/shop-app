
import React, { Context, ReactNode, createContext, useContext, useReducer, useState } from 'react'
import { PRODUCTS, ProductItem } from '../products';
import { Product } from '../pages/shop/product';

type CartItemType = 'add' | 'change' | 'remove';

type CartItemAction = {
    type: CartItemType;
    item: ProductItem;
}

export const CartItemsContext = createContext<ProductItem[] | null>(null);
export const CartItemsDispatchContext = createContext<React.Dispatch<CartItemAction> | null>(null);

export const ShopContextProvider = ({ children }: any) => {
    const [cartItems, dispatch] = useReducer(cartItemsReducer, []);

    return (
        <CartItemsContext.Provider value={cartItems}>
            <CartItemsDispatchContext.Provider value={dispatch}>
                {children}
            </CartItemsDispatchContext.Provider>
        </CartItemsContext.Provider>
    )
}

export function useCartItems() {
    const context = useContext(CartItemsContext);
    if (!context) {
      throw new Error('useCartItems must be used within a ShopContextProvider');
    }
    return context;
}
  
export function useCartItemsDispatch() {
    const context = useContext(CartItemsDispatchContext);
    if (!context) {
      throw new Error('useCartItemsDispatch must be used within a ShopContextProvider');
    }
    return context;
}

export const cartItemsReducer = (cartItems: ProductItem[], action: CartItemAction): ProductItem[] => {
    switch (action.type) {
        case 'add': {
            console.log(action);
            return [...cartItems, {...action.item, quantity: action.item.quantity++}];
        }
        case 'change': {
            // TODO: handle update quantity here...
            return cartItems;
        }
        case 'remove': {
            return cartItems.filter(item => item.id !== action.item.id);
        }
        default: {
            throw new Error('Unknown action: ' + action.type);
        }
    }
}

export const getTotalCartAmount = (cartItems: ProductItem[]) => {
    return cartItems?.reduce((total, item) => total + item.price * item.quantity, 0);
}
