
import React from 'react'
import { Products } from '../products/products';
import { Product } from '../nav/shop/Product';
import "./pages.css";
const M = () => {
  return (
    <div>
        <div className="item">
        {Products.map((product) => (
            product.size==="M"?
          <Product data={product} key={product.id} />:""
        ))}
      </div>
      
    </div>
  )
}

export default M;