import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './components/Navigationbar';
import About from './components/About'
import Banner from './components/Banner';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import Team from './components/Team';
import Membership from './components/Membership';
import Faq from './components/Faq';


function App() {
  
  
  return (
    <div>
      <NavigationBar/>
      <Banner/>
      <About/>
      <Schedule/>
      <Team/>
      <Membership/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
