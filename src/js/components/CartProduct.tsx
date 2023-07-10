import React, { useState} from 'react';
import IProduct from '../types/product';
import { useCart } from '../actions/cartContext';


interface CartProductProps {
  product: IProduct,
  
}

export default function CartProduct({ product }: CartProductProps ) {
  const cart = useCart();
  let [count , setCount] = useState(product.mount);

  function increment() {
    setCount(++count);
  }

  function decrement() {
    if(count > 0) {
      setCount(--count);
    }
  }


  return (
    <div className='cart__product'>
      <img src={product.img} alt={product.title} className='cart__product-img' />
      <h3 className='cart__product-title'>{product.title}</h3>
      <p className='cart__product-price'>{product.price} ₽</p>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <span>amount</span>
      <span>{(product.price * count).toFixed(2)} ₽</span>
      <button className='cart__btn' onClick={() => {cart.cartRemove(product)}}>Удалить</button>
    </div>
  )
}