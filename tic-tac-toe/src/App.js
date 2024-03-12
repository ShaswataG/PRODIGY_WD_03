import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import HumanVSComputer from './pages/HumanVSComputer'
import HumanVSHuman from './pages/HumanVSHuman'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="humanVScomputer" element={<HumanVSComputer />} />
        <Route path="humanVShuman" element={<HumanVSHuman />} />
      </Routes>
    </BrowserRouter>
  )
}