import React from 'react';
import { useCart } from '../actions/cartContext';
import CartProduct from './CartProduct';
import '../../style/components/cart.scss'


export default function Cart() {
  const cart = useCart();
  function cartTotal() {
    let total = 0;
    for (const product of cart.cart) {
      total += product.mount * product.price
    }
    return total;
  }
  return (
    <div className='cart__container'>
      <div className='cart__product-list'>
        {cart.cart.map( product => { return <CartProduct product={product} key={product.id} />})}
      </div>
      
    </div>
    

  )
}