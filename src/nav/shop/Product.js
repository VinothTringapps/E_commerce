import { ShopContext }from "../../context/shopContext";
import React, { useContext } from "react";

export const Product=(props)=>{
    const {id,productName,price,size,productImage}=props.data;
    const {addToCart, cartItems}=useContext(ShopContext);
    const cardItemAmount = cartItems[id];
    return <div className="product">
        <img src={productImage} alt="loading" />
        <div className="description"> 
        <p><b>{productName}</b></p>
        <p>Rs{price}</p>
        <p>{size}</p>
        </div>
        
        <button className="addToCartBttn" onClick={()=> addToCart(id) } >
            Add To Cart{cardItemAmount > 0 && <>({cardItemAmount})</>}
        </button>
    </div>
}