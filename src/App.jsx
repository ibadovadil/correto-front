import React from 'react'
// import Navigation from './components/common/Navigation'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import './styles/main.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Shop from './pages/Shop.jsx';
import Blog from './pages/Blog.jsx';
import Perloader from './components/common/Perloader.jsx';
import Navigation from './components/common/Navigation';

const App = () => {
  return (
    <>
      <Perloader />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
      </Routes></>
  )
}

export default App