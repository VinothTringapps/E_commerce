import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Shop from "./nav/shop/shop"
import Cart from "./nav/cart/cart"
import {ShopContextProvider} from './context/shopContext';
import L from './pages/L';
import M  from './pages/M';
import XL from './pages/XL';

function App() {
  return (
    <div class="App">
    <ShopContextProvider>
     <Router>
       <Navbar />
       <Routes>
         <Route path="/" element={<Shop/>} />
         <Route path="/cart" element={<Cart/>} />
         <Route path="/l" element={<L/>} />
         <Route path="/m" element={<M/>} />
         <Route path="/xl" element={<XL/>} />
       </Routes>
     </Router>
    </ShopContextProvider>
    </div>
  
  );
}

export default App;
