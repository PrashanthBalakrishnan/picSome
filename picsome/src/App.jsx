import React from 'react'
import Header from './components/Header'
import Cart from './pages/Cart'
import Photos from './pages/Photos'
import {Route, Routes} from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Photos/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}
