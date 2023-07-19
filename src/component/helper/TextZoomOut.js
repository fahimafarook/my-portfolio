import React, {useEffect, useRef, useState} from 'react';
import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function TextZoomOut() {

    const count = useRef(0);
    const scrollTrigger1 =useRef(null);

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
  }
  
  

    useEffect(() => {

      const STAR_COUNT = 100
  let result = ""
  for(let i = 0; i < STAR_COUNT; i++){ 
      result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px #fff,`
  }
  console.log(result.substring(0, result.length - 1))

        if (count.current === 0) {
          gsap.registerPlugin(ScrollTrigger);
    
        ScrollTrigger.create({
            ease: 'power3.out',
            trigger: ".text-zoomout-section",
            start: "top top",
            pin: true,
            end: `+=150%`,
             onEnter: () => {
              // console.log("on Nter1--------------");
              document.getElementsByClassName("text-zoomout-section")[0].style.backgroundColor = "white"; 
              // document.getElementById("stars").style.position = 'fixed';
              // document.getElementById("stars").style.top = '50vh';

              // document.getElementById("stars2").style.position = 'fixed';
              // document.getElementById("stars2").style.top = '50vh';
            },
            onLeaveBack: () => {
              // console.log("on NEter- onLeaveBack1-------------");
              document.getElementsByClassName("text-zoomout-section")[0].style.backgroundColor = "black"; 
            }, 
            onLeave: () => {
              // console.log("on NEter- onLeave1-------------"); 
              document.getElementsByClassName("text-zoomout-section")[0].style.backgroundColor = "black"; 

              // document.getElementById("stars").style.position = 'absolute';
              // document.getElementById("stars").style.top = 'auto';
              // document.getElementById("stars").style.bottom = '50vh';

              // document.getElementById("stars2").style.position = 'absolute';
              // document.getElementById("stars2").style.top = 'auto';
              // document.getElementById("stars2").style.bottom = '50vh';
            } 
          });

          ScrollTrigger.create({
            ease: 'power3.out',
            trigger: ".text-zoomout-section",
            start: "bottom bottom",
             onEnter: () => {
              console.log("on Nter1--------------");
              
            },
            onLeaveBack: () => {
              console.log("oonLeaveBack--------------");
            }, 
            onLeave: () => {
              console.log("on NEter- onLeave1-------------"); 
              
            } 
          });
          count.current = count.current + 1;
        }
      
        return () => {
        };
    }, []);


    return ( 
      <div className = "text-zoom-section" style={{ minHeight: "100vh", position: "relative" , background:"black"}}>
       
       {/* <div id="stars"></div>
        <div id="stars2"></div> */}
       
         <div className='text-zoomout-section'>
            <Parallax scale={[1, 0.55]} speed ={5} >
                <div className='scale-text'>wat do u wanna convey</div>
            </Parallax>
           </div>

        </div>
    );
}

export default TextZoomOut;