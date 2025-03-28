import React from 'react'
import './assets/styles/main.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import { Route, Routes, useLocation } from 'react-router-dom'

import Home from './pages/Home'
import Shop from './pages/Shop.jsx';
import Blog from './pages/Blog.jsx';
import Perloader from './components/common/Perloader.jsx';
import Navigation from './components/common/Navigation';
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Profile from './pages/Profile.jsx'
import PrivateRoute from './components/privateRoute.jsx'
import Basket from './pages/Basket.jsx'
import Gallery from './pages/Gallery.jsx'
import UserEdit from './pages/UserEdit.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import BlogDetails from './pages/BlogDetails.jsx'
import Contact from './pages/Contact.jsx'

const App = () => {
  const location = useLocation();
  const hideNavigationRoutes = ['/login', '/register', '/editProfile','/basket']
  return (
    <>
      <Perloader />
      {!hideNavigationRoutes.includes(location.pathname) && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        <Route path="/editProfile" element={<PrivateRoute element={<UserEdit />} />} />
      </Routes></>
  )
}

export default App