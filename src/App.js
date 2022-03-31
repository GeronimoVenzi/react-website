import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Food from './components/food/Food'

//Import images
import Craft1 from './assets/craft1.jpg'
import Craft2 from './assets/craft2.jpg'
import Burguer from './assets/burguer.jpg'
import Chicken from './assets/chicken.jpg'
import Footer from './assets/footer.jpg'
import HeroBg from './assets/hero-bg.jpg'
import Hero from './assets/hero.jpg'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Food />
    </>
  );
}

export default App;
