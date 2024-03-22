import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import About from './components/About'
import BlogDetails1 from './components/BlogDetails1'
import BlogDetails2 from './components/BlogDetails2'
import Contact from './components/Contact'
import Error from './components/Error'
import Index1 from './components/Index1'
import Index2 from './components/Index2'
import Index3 from './components/Index3'
import Index4 from './components/Index4'
import Index4Dark from './components/Index4Dark'
import OurBlog from './components/OurBlog'
import Portfolio from './components/Portfolio'
import Portfolio2 from './components/Portfolio2'
import Portfolio3 from './components/Portfolio3'
import PricingPlan from './components/PricingPlan'
import ServiceDetails from './components/ServiceDetails'
import Services from './components/Services'

function App() {

  let [resData, setResData] = useState({});

  async function getData() {
    try {
      let res = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      let data = await res.json();
      console.log(data);
      setResData(data.user);

      // let res = await axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      // console.log(res);
      // setResData(res.data.user);

    } catch (error) {
      console.log('Error Occured');
    }
  }

  useEffect(() => {
    getData();
  }, [])

  // console.log(resData);

  return (
    <div id='app'>
      <BrowserRouter >
        {
          // <Routes >
          //   <Route path='/' element={<Error />} />
          // </Routes>

          <Routes>

            <Route path='/' element={<Layout data={resData} />} >
              <Route path='' element={<Index1 data={resData} />} />
              <Route path='about' element={<About data={resData} />} />
              <Route path='blog-details-1' element={<BlogDetails1 data={resData} />} />
              <Route path='blog-details-2' element={<BlogDetails2 data={resData} />} />
              <Route path='contact' element={<Contact data={resData} />} />
              <Route path='error' element={<Error />} />
              <Route path='index-2' element={<Index2 data={resData} />} />
              <Route path='index-3' element={<Index3 data={resData} />} />
              <Route path='index-4' element={<Index4 data={resData} />} />
              <Route path='index-4-dark' element={<Index4Dark data={resData} />} />
              <Route path='our-blog' element={<OurBlog data={resData} />} />
              <Route path='protfolio-details-1' element={<Portfolio data={resData} />} />
              <Route path='protfolio-details-2' element={<Portfolio2 data={resData} />} />
              <Route path='protfolio-details-3' element={<Portfolio3 data={resData} />} />
              <Route path='pricing-plans' element={<PricingPlan data={resData} />} />
              <Route path='services-details' element={<ServiceDetails data={resData} />} />
              <Route path='services' element={<Services data={resData} />} />
            </Route>

          </Routes>
        }
      </BrowserRouter>
    </div>

  )
}

export default App
