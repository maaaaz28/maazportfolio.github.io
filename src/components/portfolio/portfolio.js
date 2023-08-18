import React from 'react'
import './portfolio.scss' 
import {Routes, Route, Link, Outlet } from 'react-router-dom'
import SideBar from '../Sidebar/SideBar'
import LaBelleAurore from '../../assets/fonts/CoolveticaRg-Regular.woff'
import Home from '../Home/Home'
import RightBar from '../rightBar/rightBar'
export default function Portfolio() {
  return ( 
    <>
    <div className="portfolioLayout">
      <SideBar /> 
      <RightBar/>
      <div className='page'>
        <span className='tags top-tags'> &lt;body&gt; </span>
 <Outlet/>
 <span className='tags bottom-tags'>&lt;body&gt;
 <br/>
 <span className='bottom-tag-html'> &lt;/html&gt; </span>
 </span>
 <Routes>
<Route index element={<Home/>} >
  </Route>
</Routes>
      </div>
        </div>
    </>
  )
}