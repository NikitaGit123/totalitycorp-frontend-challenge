import './App.css';
import HomePage from './Components/HomePage';
import ProductItems from './Components/ProductItems';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from './Components/CartPage';
import CongratulationPage from './Components/CongratulationPage';
import ShippingPaymentForm from './Components/ShippingPaymentForm';
import Aboutus from './Components/Aboutus';

function App() {
  
  return (
    <div>
      <Router>
      <Routes>
      <Route exact path="/" element={<HomePage/>}  ></Route>
      <Route exact path='/about' element={<Aboutus/>}></Route>
      <Route  exact  path="/sofa" element={<ProductItems   key="Sofas & Chair"  category="Sofas & Chair"/>}></Route> 
      <Route  exact  path="/dinning" element={<ProductItems   key="Dinnings"  category="Dinnings"/>}></Route>
      <Route  exact  path="/outdoor" element={<ProductItems   key="OutDoors"  category="OutDoors"/>}></Route> 
      <Route  exact  path="/livingroom" element={<ProductItems   key="general"  category="Room Living"/>}></Route> 
      <Route  exact  path="/estilo" element={<ProductItems   key="general"  category="Storage"/>}></Route>
      <Route  exact  path="/lamps" element={<ProductItems   key="Lights & Lamp"  category="Lights & Lamp"/>}></Route>
      <Route  exact path="/checkout" element={<CartPage />} />
      <Route  exact path="/ShippingPaymentForm" element={<ShippingPaymentForm/>} />
      <Route exact path='/congratulation' element={<CongratulationPage/>} />
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
