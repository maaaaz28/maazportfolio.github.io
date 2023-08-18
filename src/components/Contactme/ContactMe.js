    import {Routes, Route, Link, Outlet } from 'react-router-dom'
    import SideBar from '../Sidebar/SideBar'
    import LaBelleAurore from '../../assets/fonts/CoolveticaRg-Regular.woff'
    import Home from '../Home/Home'
    import '../Contactme/ContactMe.scss'
    import RightBar from '../rightBar/rightBar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faFigma, faGoogle, faHtml5, faJava, faJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDumbbell, faFootball, faGamepad, faLaptop, faPhone, faSoccerBall, faSpoon } from '@fortawesome/free-solid-svg-icons'
     
export default function ContactMe()
      {
      return( 
        <>
        <div className="portfolioLayout">
          <SideBar /> 
          <div className='page'>
            <span className='tags top-tags'> &lt;body&gt; </span>
     <Outlet/>
     <span className='htag'> &lt;h1&gt; </span>
  <h1 className='abt'>CONTACT ME! </h1>
  <span className='htag2'> &lt;h1&gt; </span>
     <span className='tags bottom-tags'>&lt;body&gt;
     <br/>
     <span className='bottom-tag-html'> &lt;/html&gt; </span>
     </span>  
     <Routes>  
    </Routes> 
    <div className='lis'>
    <h2>CONTACT </h2>
    <ul>
    <div className="int1">  <li> <FontAwesomeIcon icon={faPhone}/><span> +92 333 8669347 </span> </li>
    </div>
      <li> <FontAwesomeIcon icon={faGoogle}/><span> mat.official6@gmail.com </span> </li>
        </ul>
    <h2>OR</h2>
    <p>leave a text below</p>
     </div>
     <div className='contact-form'>
<form>
      <ul>
     <li className='half'>
      <input type="text"  name="name" placeholder="Name" required />
     </li>
     <li className='half' >
      <input type="email" name="Email" placeholder="Email" required />
     </li>
       <li className='sub1' >
      <input type="text" name="subject" placeholder="Subject" required />
     </li>
      <li>
      <textarea type="message" name="message" placeholder="message" required ></textarea>
     </li>
      </ul>
</form>  
      <Link type='submit' to='/work' className='work2'>SUBMIT</Link>
  </div>
    </div> 
    </div> 
        </>
      );
    }