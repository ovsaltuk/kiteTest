import React from 'react';
import { useState } from 'react';
import '../../style/components/product.scss';
import IProduct from '../types/product';
import { useCart } from '../actions/cartContext';


interface ProductProps {
  product: IProduct,
  
}

function Product ( { product }: ProductProps ) {


  const [added, setAdded] = useState(false);
  const cart = useCart();

  function addProductToCart () {
    setAdded(true);
    cart.addToCart(product);
  }
  

  return (
    <div className='product'>
      <img src={product.img} alt={product.title} className='product__img' />
      <h3 className='product__title'>{product.title}</h3>
      <p className='product__price'>{product.price} ₽</p>
      <button 
        className='product__button' 
        onClick={addProductToCart}
        disabled={added}>
          {added ? 'В корзине' : 'в корзину'}
      </button>
    </div>
  )
}

export default Product;