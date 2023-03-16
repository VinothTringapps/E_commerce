import { Products } from "../products/products";
import React, { createContext , useState, useMemo } from "react";


export const ShopContext =createContext(null);
const getDefaultCart=()=>{
    let cart={}
    for(let i=1;i<Products.length+1;i++)
    {
        cart[i]=0;
    }
    return cart;
};

export const ShopContextProvider =(props)=>{
    const [cartItems,setCartItems]=useState(getDefaultCart());

    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    };

    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    };

    const updateCartItemCount=(newAmount , itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:newAmount}))
    };
    
    const contextValue=useMemo(()=>({cartItems, addToCart, removeFromCart,updateCartItemCount}),[cartItems]);

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}