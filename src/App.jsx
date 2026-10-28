import React from 'react'
import Navbar from './components/Navbar'
import Nav2 from './components/Nav2'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Product from './pages/Product'
import NotFound from './pages/NotFound' 
import Men from './pages/Men'
import Women from './pages/women'
import Kids from './pages/Kids'
import CourseDetail from './pages/CourseDetaile'


const App = () => {
  return (
    <div className='bg-gray-900 text-white h-screen '>
      <Navbar/>
      <Nav2/>
      <Footer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/Courses' element = {<Courses/>}/>
        <Route path='/Courses/:Courseid' element = {<CourseDetail/>}/>
        <Route path="/product" element={<Product />} >
      <Route path='Men'  element = {<Men/>}/>
          <Route path="women" element={<Women />} />
          <Route path='Kids' element = {<Kids/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
       
       
}

export default App