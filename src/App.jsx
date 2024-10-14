import { useState } from 'react'
import './App.css'

import { MainSection } from './Components/MainSection'
import AsideSection from './Components/Aside/Aside'
import { Header } from './Components/Header/Header'

function App() {
  const [active, setActive] = useState(1)

  return (
    <div>
      <header><Header/></header>
      <div className='grid grid-cols-10 '>
      
    <div className='col-span-2'>    <AsideSection  setActive={setActive} active={active}/></div>
    <div className='col-span-8'>    <MainSection  active={active} /></div>
    </div>
    </div>
    


  )
}

export default App
