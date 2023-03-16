import {Link} from "react-router-dom";
import {FaCartPlus} from "react-icons/fa";
let Navbar =()=>{
    return<div className="navbar">
                <div className="header"> Shopper Shop</div>

        <div className="size">
            <div><Link to={'/m'}>M</Link></div>
            <div><Link to={'/l'}>L</Link></div>
            <div><Link to={'/xl'}>XL </Link></div>
            
        </div>
        <div className="links">
            {/* where i want to go and what page */ } 
            <Link to="/">Shop</Link>
            <Link to="/cart">
                <FaCartPlus size={32}/>
            </Link>
        </div>

    </div>
}
export default Navbar;