//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { useState } from 'react'
import Details from './pages/Details'
import Cart from './pages/Cart'

function App() {
  const [search,setSearch]=useState("")
 
  return (
    <>
     <BrowserRouter>
     <Navbar setSearch={setSearch}/>
        <Routes>
              <Route path='/' element={<Home search={search}/>} />
              <Route path='/details/:id' element={<Details setCnt={setCnt} cnt={cnt}/>}/>
              <Route path='/Cart' element={Cart}/>
        </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
