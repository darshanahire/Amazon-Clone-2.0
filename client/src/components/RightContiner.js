import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function RightContiner() {

  var [image, setImg] = useState("img/banner5.jpg")
  var [index,setIndex ] = useState(0);
  const Imgarr=[
    "img/banner1.jpg","img/banner2.jpg","img/banner3.jpg","img/banner4.jpg",
    "img/banner6.jpg","img/banner7.jpg","img/banner8.jpg","img/banner9.jpg","img/banner10.jpg",
    "img/banner11.jpg","img/banner12.jpg","img/banner13.jpg",    "img/banner5.jpg"
]
  function switchimg(prev){
    if(prev){
      if(index==0){setIndex(Imgarr.length-2);
        setImg(Imgarr[12])
        return
      }
      setImg(Imgarr[index])  
      setIndex((index-1)%Imgarr.length);
    }
    else{
      setImg(Imgarr[index])
      setIndex((index+1)%Imgarr.length);
    }
  }
  setTimeout(() => {
    const timer = setTimeout(() => {
      switchimg()
    }, 5000);
    return () => clearTimeout(timer);
}, [])

  return (

    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image} className="d-block banner" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" onClick={()=>switchimg(true)} type="button" style={{"marginTop":"60px"}}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden" >Previous</span>
      </button>
      <button className="carousel-control-next" onClick={()=>switchimg(false)} type="button" style={{"marginTop":"60px"}}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      {/* <button className="carousel-control-prev" onClick={() => { togImg === false ? setImg("img/banner6.jpg") : setImg("img/banner7.jpg"); setTogImg(!togImg) }} type="button" style={{"marginTop":"60px"}}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden" >Previous</span>
      </button>
      <button className="carousel-control-next" onClick={() => { togImg === false ? setImg("img/banner8.jpg") : setImg("img/banner9.jpg"); setTogImg(!togImg) }} type="button" style={{"marginTop":"60px"}}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button> */}
    </div>
  )
}

export default RightContiner
