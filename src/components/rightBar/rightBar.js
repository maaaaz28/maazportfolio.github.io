
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
 import mylogo from '../../assets/images/mypic.png'
import  './rightBar.scss'
export default function RightBar() {
return(
<>
  <div className="right nav-bar">
        </div>
          <div className='right2 '>
          <img src={mylogo} alt="me"/>
          </div>
</>
      );
}

