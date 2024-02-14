import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Product from './component/pages/Product';
import Contact from './component/pages/Contact';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path='/' element= {<Home />} />
      
      <Route path='/about' element= {<About />} />
      <Route path='/Product' element= {<Product />} />
      <Route path='/contact' element= {<Contact />} />


     </Routes>
    </div>
  );
}

export default App;
