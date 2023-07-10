import React from 'react';
import Product from '../js/components/Product';
import IProduct from '../js/types/product';
import { Navigation } from '../js/components/Navigation';
import '../style/components/productList.scss';

interface ProductListPageProgs {
  products: IProduct[],
}

export function ProductListPage({ products }: ProductListPageProgs) {
  return (
    <div>
      <Navigation />
      <div className='product-list'>
        {products.map( product => { return <Product product={product} key={product.id} />})}
      </div>
    </div>
  );
}