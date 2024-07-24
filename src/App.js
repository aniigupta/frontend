import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loginsignup from './Pages/Loginsignup';
import Cart from './Pages/Cart';
import Shopcategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<Shopcategory category="men" />} />
          <Route path='/womens' element={<Shopcategory category="women" />} />
          <Route path='/kids' element={<Shopcategory category="kid" />} />
          <Route path='/product' element={<Product />} />
          <Route path='/:productid' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Loginsignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
