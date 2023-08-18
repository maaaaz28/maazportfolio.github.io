 import React from 'react'
 import '../imageSlider/ImageSlider.scss'
 import fyp1 from '../../assets/images/fyp1.jpeg'
 import fyp2 from '../../assets/images/fyp2.jpeg'
 import fyp3 from '../../assets/images/fyp3.jpeg'
 import fyp4 from '../../assets/images/fyp4.jpeg'
 import fyp5 from '../../assets/images/fyp5.jpeg'
 export default function ImageSlider() {
   return (
    <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={fyp1} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={fyp2} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={fyp3} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={fyp4} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={fyp5} class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  );
  }