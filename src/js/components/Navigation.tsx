import React from 'react';
import '../../style/components/nav.scss'
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className='nav'>
      <Link className='nav__link' to='/'>Products</Link>
      <Link className='nav__link' to='/cart'>Cart</Link>
      <Link className='nav__link' to='/order'>Order</Link>
    </nav>
  )
}