import React from 'react';
import { Navigation } from '../js/components/Navigation';
import CartProduct from '../js/components/CartProduct';
import '../style/components/cart.scss';
import Cart from '../js/components/Cart';

export function CartPage() {
  return (
    <>
      <Navigation />
      <Cart />
    </>

  )
}