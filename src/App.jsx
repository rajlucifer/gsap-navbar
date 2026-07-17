import { useState } from 'react'

import Navbar from './components/Navbar'
import Scroll from './components/Scroll'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hamburger from './components/Hamburger'

function App() {
   

  return (
     <section className=' w-full min-h-screen bg-black  pt-2'>
      <Navbar/>
      <Scroll/>
      
      
       
     </section>
  )
}

export default App
