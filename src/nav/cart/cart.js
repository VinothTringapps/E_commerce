import { Products } from "../../products/products";
import { ShopContext }from "../../context/shopContext";
import React,{useContext}from "react";
import {CartItem} from "./CartItem";
import "./cart.css";
const Cart=()=>{
    const {cartItems}=useContext(ShopContext);
    return <div className="cart">
        <div><h1> Your cart Items</h1></div>
        <div className="cartItems">
            {Products.map((product)=>{
                if(cartItems[product.id] !==0) {
                    return<CartItem data={product} key={product}/>
                }
                else 
                return '';
            })}
        </div>
    </div>
};
export default Cart;