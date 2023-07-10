import React from 'react';
import Product from '../components/Product';
import '../../style/components/productList.scss';
import IProduct from '../types/product';


interface ProductListProps {
  productList: IProduct[],
}

function ProductList ({ productList }: ProductListProps) {

  return (
    <div className='product-list'>
      {productList.map( product => { return <Product product={product} key={product.id} />})}
    </div>
  )
}

export default ProductList;