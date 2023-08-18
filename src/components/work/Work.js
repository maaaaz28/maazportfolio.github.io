import './Work.scss'
  import {Routes, Route, Link, Outlet } from 'react-router-dom'
  import SideBar from '../Sidebar/SideBar'
 import React, { useRef, useState } from 'react'   
import ImgApp from '../imageSlider/ImageSlider'
  export default function MyWork() { 
    return(
  <>
      <div className="portfolioLayout">
        <SideBar /> 
        <div className='page'>
          <span className='tags top-tags'> &lt;body&gt; </span>
   <Outlet/>
   <span className='htag'> &lt;h1&gt; </span>
<h1 className='abt'>MY WORK</h1>
<span className='htag2'> &lt;h1&gt; </span>
   <span className='tags bottom-tags'>&lt;body&gt;
   <br/>
   <span className='bottom-tag-html'> &lt;/html&gt; </span>
   </span>  
   <Routes>  
  </Routes>
  <div className='worklist'>
    <h2>PROJECTS</h2>
    <ul>
    <div className="workint">   
      <li> <span > FINAL YEAR PROJECT OF ONLINE E-SPORTS ORGANISING WEBSITE </span> </li>
      <li> <span> BANNERS AND FLEX DESIGNS OF EVENTS </span> </li>
      <li> <span> SOCIAL MEDIA HANDLING OF HOMEBASED BUSINESS </span> </li>
     </div>
    </ul>
  </div>
  <div className='worklist2'>
    <h2>SCREENSHOTS</h2>
  </div>
  <ImgApp />
  </div> 
</div>
</>
    );
  }