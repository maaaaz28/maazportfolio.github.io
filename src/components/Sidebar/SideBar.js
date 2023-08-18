import './SideBar.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/Mlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LogoSubtitle from '../../assets/images/mlog.png'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import AboutMe from '../About/AboutMe'
import { faFacebook, faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Portfolio from '../portfolio/portfolio'
import FrontPage from '../Frontpage/frontpage'
export default function SideBar() {
return(

  <div className="nav-bar">
         <Link className="logo" to="/">
          <img src={LogoS} alt="logo"/> 
          <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/> 
      </Link>
     <nav>
      <Link 
      exact 
      activeclassName="active" 
      to="/portfolio" >
      <FontAwesomeIcon 
      icon={faHome}
         beat
      color="4d4d4e"/>
      </Link>
     
      <Link
       exact 
       activeclassName="about-link" 
       to="/aboutme" >
      <FontAwesomeIcon 
      icon={faUser} 
      beat  
      color="4d4d4e"/>
      </Link>
     
      < Link 
      exact  
      activeclassName="contact-link" 
      to="/contactme" >
      <FontAwesomeIcon icon={faEnvelope} beat  color="4d4d4e"/>
      </ Link>
     
     </nav>
     <ul>
      <li>
        <a target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/MaazAhmedTahir28">
        <FontAwesomeIcon icon= { faFacebook } />
        </a>
      </li>
      <li>
        <a target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/mvvz.__/">
        <FontAwesomeIcon icon= {faInstagram } />
        </a>
      </li>
      <li>
        <a target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/maaz-ahmed-131a14207/">
        <FontAwesomeIcon icon= {faLinkedin } />
        </a>
      </li>
      <li>
        <a target="_blank"
        rel="noreferrer"
        href="https://myaccount.google.com/?utm_source=OGB&utm_medium=app">
        <FontAwesomeIcon icon= {faGoogle } />
        </a>
      </li>
    
     </ul>
        </div>
      );
}

