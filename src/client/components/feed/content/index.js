import React from 'react';
import ProductItem from './item';;

export default ({ data, deleteProduct }) => <div className="product-wrapper">
  {data.map(item => <ProductItem key={item.id} {...item} deleteProduct={deleteProduct} />)}
</div>;