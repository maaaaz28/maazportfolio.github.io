import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import './Home.scss';
import'../portfolio/portfolio.scss';
import LogoTitle from '../../assets/images/Mlogo.png'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
export default function Home() {
    const [letterClass, setLetterClass]= useState('text-animate')
  const nameArray=['A','A','Z',' ','A','H','M','E','D']
  const jobArray=['W','e','b',' ','D','e','v','e','l','o','p','e','r'] 
  useEffect(()=>{ 
      setTimeout(() =>{
        setLetterClass('text-animation-hover')
      },4000)
  }, [])
  return (
    <div className='container home-page'> 
<div className='text-zone'>
<h1> 
  <span className={letterClass} >H</span> 
  <span className={`${letterClass} _12` }>i,</span> 
  <br/> 
  <span className={`${letterClass} _13` }>I</span>
  <span className={`${letterClass} _14` }>'m</span>
<img src={LogoTitle} alt="developer" />
<AnimatedLetters className={letterClass}
strArray={nameArray}
idx={15} />
<br/>
<AnimatedLetters letterClass={letterClass}
strArray={jobArray}
idx={24} />
</h1>
<h2>Front-End Developer / UI/UX Designer </h2>
<Link to='/contactme' className='flat-button'>CONTACT ME!</Link>
<Link to='/work' className='work'>MY WORK</Link>
</div>
    </div>
  )
}

