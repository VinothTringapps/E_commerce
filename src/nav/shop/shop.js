import { Products } from "../../products/products";
import { Product } from "./Product"

import "./shop.css";
const Shop=()=>{
    return <div className="Shop">
        <div className="header"> Shopper Shop</div>
        <div className="Products">{Products.map((product)=>(
            <Product data={product} key={product.id}/>))}</div>
    </div>
};
export default Shop;