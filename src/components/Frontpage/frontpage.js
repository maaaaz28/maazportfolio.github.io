import React from 'react'
import './frontpage.scss'
import '../About/AboutMe.scss'
import AboutMe from '../About/AboutMe'
import {Link} from 'react-router-dom';
export default function FrontPage() {
    return (  
<>
    <div className='name'>
        MAAZ AHMED TAHIR.
    </div>
    <div className='work'>
        UI/UX & WEB DEVELOPER 
    </div>
    <div>
    <Link type='submit' to='/portfolio' className='work3'>PORTFOLIO</Link>
    </div>
</>
  )
}
