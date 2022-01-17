import React from 'react';
import './App.css';
import Title from './components/Title';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Press from './components/Press';
import Pricing from './components/Pricing';
import CallToAction from "./components/CallToAction"
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      
      <Title/>
      <Features/>
      <Testimonial/>
      <Press/>
      <Pricing/>
      <CallToAction/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
