import { ShopContext}from "../../context/shopContext";
import React, {useContext} from "react";
export const CartItem=(props)=>{
    const {id,productName,price,size,productImage}=props.data;
    const {cartItems,addToCart,removeFromCart,updateCartItemCount}=useContext(ShopContext);
    return (
        <div className="cartItem">
            <img src={productImage} alt="loading"/>
            <div className="description">
                <p><b>{productName}</b></p>
                <p>Rs{price}</p>
                <p>{size}</p>
                <div className="countHandler">
                    <button onClick={()=>{addToCart(id)}}> + </button>
                    <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
                    <button onClick={()=>{removeFromCart(id)}}> - </button>
                </div>
            </div>
        </div>
    )
}