import React from 'react'
import { Products } from "../products/products"
import { Product } from "../nav/shop/Product"
import "./pages.css"
 const XL=()=>{
    return (
    <div >
        <div className='item'>
            {Products.map((product)=>(
                product.size==="XL"? 
                <Product data={product} key={product.id}/>:""
            ))}
        </div>
    </div>
    )
}
export default XL;