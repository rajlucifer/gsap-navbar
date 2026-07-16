import { useState } from 'react'

import Navbar from './components/Navbar'
import Scroll from './components/Scroll'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
   

  return (
     <section className='w-[100vw] h-[100vh] bg-black  pt-2'>
      <Navbar/>
      <Scroll bgcolor="bg-yellow-600" bgbox="bg-red-600" />
      <Scroll bgcolor="bg-blue-600" bgbox="bg-gray-500"   />
      <Scroll bgcolor="bg-green-600" bgbox="bg-orange-600" />
      
      
       
     </section>
  )
}

export default App
