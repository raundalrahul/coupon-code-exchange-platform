import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Product from './component/pages/Product';
import Contact from './component/pages/Contact';
import Footer from './component/Footer';
import Signup from './component/pages/Signup';
import Login from './component/pages/Login';
import Startpage from './component/pages/Startpage';
import { useEffect, useState } from 'react';
import { auth } from './firebase';


function App() {
  const[userName, setUserName]=useState("");
  useEffect = (()=>{
    auth.onAuthStateChanged(user=>{
      if(user)
      {
        setUserName(user.displayName);
      }
      else{
        setUserName("")
      }
     
    })
  },[]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Startpage name={userName} />} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />

        <Route path='/about' element={<About />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
