import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
function RightContiner() {

  const Imgarr = [
    "img/banner5.jpg", "img/banner2.jpg", "img/banner3.jpg", "img/banner4.jpg", "img/banner1.jpg",
    "img/banner6.jpg", "img/banner7.jpg", "img/banner8.jpg", "img/banner9.jpg", "img/banner10.jpg",
    "img/banner11.jpg", "img/banner12.jpg", "img/banner13.jpg"]

  return (
    <div className="carousel-parent">
      <Carousel indicators={false}>
        {
          Imgarr.map((Element,i) => {
            return (
              <Carousel.Item interval={4000} key={i}>
                <img
                  className="d-block banner"
                  src={Element}
                  alt="Second slide"
                />
              </Carousel.Item>)
          })
        }
      </Carousel>
    </div>
  )
}

export default RightContiner
