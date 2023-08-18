import React from 'react'
import './AboutMe.scss'
  import {Routes, Route, Link, Outlet } from 'react-router-dom'
  import SideBar from '../Sidebar/SideBar'
  import LaBelleAurore from '../../assets/fonts/CoolveticaRg-Regular.woff'
  import Home from '../Home/Home'
  import RightBar from '../rightBar/rightBar.js'
import { faCss3, faFigma, faHtml5, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faFootball, faGamepad, faLaptop, faSoccerBall, faSpoon } from '@fortawesome/free-solid-svg-icons'
  export default function AboutMe() {
    return(
  <>
      <div className="portfolioLayout">
        <SideBar /> 
        <div className='page'>    
          <span className='tags top-tags'> &lt;body&gt; </span>
   <Outlet/>
   <span className='htag'> &lt;h1&gt; </span>
<h1 className='abt'>ABOUT ME</h1>
<span className='htag2'> &lt;h1&gt; </span>
<p className='para'>To secure a challenging entry-level position in the company where I can apply my skills and contribute to the development and victory of company. I am eager to learn, energetic to memorize, versatile, and committed to conveying high-quality work, whereas ceaselessly creating my proficient abilities and contributing emphatically to an energetic group environment</p>
   <span className='tags bottom-tags'>&lt;body&gt;
   <br/>
   <span className='bottom-tag-html'> &lt;/html&gt; </span>
   </span>  
   <Routes>  
  </Routes>
  <div className='list'>
    <h2>INTERESTS</h2>
    <ul>
    <div className="int1"> <li> <FontAwesomeIcon icon={faSoccerBall}/> <span> FOOTBALL </span></li>  
     </div>
      <li> <FontAwesomeIcon icon={faGamepad}/><span> GAMING </span> </li>
      <li> <FontAwesomeIcon icon={faSpoon}/><span> COOKING </span> </li>
      <li> <FontAwesomeIcon icon={faLaptop}/><span> TECH </span> </li>
      <li> <FontAwesomeIcon icon={faDumbbell }/><span> FITNESS </span> </li>
    </ul>
  </div>
  <div className='list1'>
    <h2 className='heading'>SKILLS</h2>
    <ul className='lists'>
    <div className="int2">  <li> <span> REACT </span></li>  
     </div>
      <li className='listsub'> <span> JAVASCRIPT </span> </li>
      <li className='listsub'>  <span> FIGMA </span> </li>
      <li className='listsub'> <span> HTML </span> </li>
      <li className='listsub'>  <span> CSS </span> </li>
      <li className='listsub'>  <span> DATA ANALYSIS </span> </li>
    </ul>
  </div>
 
  <div className="stage-cube-cont">
  <div className="cubespinner">
          < div className="face1">
      <FontAwesomeIcon icon={faReact} beat  color="#5ED4F4"/>
      </ div>
      < div className="face2">
      <FontAwesomeIcon icon={faHtml5} beat  color="#F06529"/>
      </ div>
      < div className="face3">
      <FontAwesomeIcon icon={faCss3} beat  color="#28A4D9"/>
      </ div>
      < div className="face4">
      <FontAwesomeIcon icon={faFigma} beat  color="#FFFF"/>
      </ div>
      < div className="face5">
      <FontAwesomeIcon icon={faJs} beat  color="#EFD81D"/>
      </ div>
         
          </div>
</div>
          </div>
          </div>
      </>
    );
  }