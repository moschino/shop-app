
import React, { Context, ReactNode, createContext, useContext, useReducer, useEffect } from 'react'
import { PRODUCTS, ProductItem } from '../products';
import { Product } from '../pages/shop/product';

type CartItemType = 'add' | 'remove' | 'clear';

type CartItemAction = {
    type: CartItemType;
    item: ProductItem;
}

export const CartItemsContext = createContext<ProductItem[]>([]);
export const CartItemsDispatchContext = createContext<React.Dispatch<CartItemAction> | null>(null);

export const ShopContextProvider = ({ children }: any) => {
    const cartItemsFromLocalStorage = localStorage.getItem('cartItems');
    // console.log('ShopContextProvider :: cartItemsFromLocalStorage', cartItemsFromLocalStorage);

    const initCartItems = cartItemsFromLocalStorage ? JSON.parse(cartItemsFromLocalStorage) : [];
    const [cartItems, dispatch] = useReducer(cartItemsReducer, initCartItems);
    // console.log('ShopContextProvider :: cartItems', cartItems);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

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
            const isAlreadyInCart = cartItems.find((cartItem) => cartItem.id === action.item.id);
            const quantity = isAlreadyInCart ? action.item.quantity++ : 1
            return [...cartItems, {...action.item, quantity}];
        }
        case 'remove': {
            return cartItems.filter(item => item.id !== action.item.id);
        }
        case 'clear': {
            return [];
        }
        default: {
            throw new Error('Unknown action: ' + action.type);
        }
    }
}

export const getTotalCartAmount = (cartItems: ProductItem[]) => {
    return cartItems?.reduce((total, item) => total + item.price * item.quantity, 0);
}
