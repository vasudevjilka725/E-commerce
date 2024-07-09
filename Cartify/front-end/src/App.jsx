
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCatagory from './Pages/ShopCatagory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {


  return (
    <div>
      <BrowserRouter>
      {/* We did that so we can see the navbar in every page. */}
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCatagory banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<ShopCatagory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCatagory banner={kids_banner} category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
