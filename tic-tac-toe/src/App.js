// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
// import HumanVSComputer from './pages/HumanVSComputer'
import HumanVSHuman from './pages/HumanVSHuman'


export default function App() {
  return (
    <div className='app'>
      <HumanVSHuman />
    </div>
  )
}