import React, { useState, useContext } from 'react';
import IProduct from '../types/product';

interface CartContextProps {
  cart: IProduct[],
  addToCart: (product: IProduct) => void,
  cartRemove: (product: IProduct) => void,
};

export const CartContext = React.createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  cartRemove: () => {},
});

interface CartProviderProps {
  children: any
}

export const useCart = () => {
  return useContext(CartContext)
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const cartAdd = (prod: IProduct) => {
    setCart((prev) => [...prev, prod]);
  }
  const removeFromCart = (prod: IProduct) => {
    setCart((prev) => prev.filter((item) => item.id !== prod.id))
  }

  return (
    <CartContext.Provider value={{
      cart: cart,
      addToCart: cartAdd,
      cartRemove: removeFromCart 
      }}>
      {children}
    </CartContext.Provider>
  )
}
