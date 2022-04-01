import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Food from './components/food/Food'
import Footer from './components/footer/Footer'

//Import images
import Craft2 from './assets/craft2.jpg'
import Craft1 from './assets/craft1.jpg'
import Burger from './assets/burger.jpg'
import Chicken from './assets/chicken.jpg'
import HeroBg from './assets/hero-bg.jpg'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Food bgImg={Craft1} />
      <Food bgImg={Craft2} />
      <Food bgImg={Chicken} />
      <Food bgImg={Burger} />
      <Food bgImg={HeroBg} />
      <Footer />
    </>
  );
}

export default App;
