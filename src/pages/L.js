import { Products } from '../products/products';
import { Product } from '../nav/shop/Product';
import "./pages.css"
 const L =()=>{
    return <div>
        <div className="item">
            {Products.map((product)=>(
                product.size==="L" ? <Product data={product} key={product.id}/>:""
            ))}
        </div>
    </div>
}
export default L;