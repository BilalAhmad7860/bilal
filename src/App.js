
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/shop';
import Shopcategory from './pages/shopcategory';
import Footer from './components/Footer/Footer';
import laptopbanner from './components/assests/laptopbanner2.jpg'
import phonebanner from './components/assests/phonebanner.jpg'
import watchbanner from './components/assests/watchbanner.jpg'

function App() {
  return (
    <div >
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/Laptops' element={<Shopcategory banner={laptopbanner} category="Laptops"/>}/>
      <Route path='/Smart phone' element={<Shopcategory banner={phonebanner}category="Smart phone" />}/>
      <Route path='/Watches' element={<Shopcategory banner={watchbanner}category="Watches"/>}/>
      <Route path='product' elemen={<product/>}/>
      <Route path='productId' elemen={<cart/>}/>
       <Route path='/login' element={<loginsignup/>}/>
       <Route path='/cart' element={<cart/>}/>
     

      
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
