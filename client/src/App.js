import React from 'react'
import {Route} from "react-router-dom";
import "./App.css";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';

export const App = () => {
  return (
    <>
    <Navbar/>

    <Route exact path="/">
      <Home/>
    </Route>

    <Route path="/about">
      <About/>
    </Route>

    <Route path="/contact">
      <Contact/>
    </Route>

    <Route path="/login">
      <Login/>
    </Route>

    <Route path="/signup">
      <Signup/>
    </Route>

    <Footer/>
    </>
  )
}
export default App


