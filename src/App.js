  
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Nav from './components/navigation';
import Product from './components/products';
import HomePage from './components/home';
import Footer from './components/footer';
import { useState,useEffect } from 'react';
import ProductD from './components/productD';


function App() {
  const [local, setLocal] = useState([]);
  useEffect(() => {

    localStorage.setItem('hihi', JSON.stringify(local))
    localStorage.setItem('cart', JSON.stringify(local))
    localStorage.setItem('quantity', JSON.stringify(local))
  
    

  },)
  return (
    <Router>
       
          <Nav/>
          <Route path="/" exact component={HomePage} />
      {/* <Route path="/danhmucsanpham" component={Nav} /> */}
      <Route path="/sanpham" component={ProductD} />
          
      </Router>
      
  );
}

export default App;
