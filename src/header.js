import {FaCartPlus} from "react-icons/fa";

function Header(){
   return( <div className="header">
        <div><h1>Shopping Session</h1></div>
        <div><a href="#/search"><FaCartPlus/></a></div>
        </div>)

};
export default Header;