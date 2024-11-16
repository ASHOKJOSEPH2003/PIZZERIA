import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/Navigationbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Pizzas from './components/pages/menu/pizzas';
import Sides from './components/pages/menu/sides'
import { Cart } from './components/pages/cart/cart';
import BirthdayPartyForm from './components/pages/birthday';
import CateringForm from './components/pages/catering';



function App() {
  return (
    <div>
    
    <BrowserRouter>

    <div className="App">
    <Navigationbar/>
      <Routes>
      
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/pizzas' element ={<Pizzas/>}></Route>
        <Route path='/sides' element={<Sides/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path="/birthday" element={<BirthdayPartyForm/>}></Route>
        <Route path="/catering" element={<CateringForm/>}></Route>
      </Routes>
        
    </div>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
