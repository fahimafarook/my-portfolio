import React, {useEffect, useRef, useState} from 'react';
import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function TextZoomOut() {

    const count = useRef(0);
    const scrollTrigger1 =useRef(null);

    useEffect(() => {
        // if (count.current === 0) {
        //   gsap.registerPlugin(ScrollTrigger);
    
        // ScrollTrigger.create({
        //     ease: 'power3.out',
        //     trigger: ".text-zoomout-section",
        //     start: "top top",
        //     pin: true,
        //     end: `+=100%`,
        //      onEnter: () => {
        //       console.log("on Nter--------------");
        //     },
        //     onLeaveBack: () => {
        //       console.log("on NEter- onLeaveBack-------------");
        //     }, 
        //     onLeave: () => {
        //       console.log("on NEter- onLeave-------------"); 
        //     } 
        //   });
        //   count.current = count.current + 1;
        // }
      
        return () => {
        };
    }, []);


    return (
        // <div style={{ minHeight: "30vh" }}>
        <div className='text-zoomout-section'>
            <Parallax scale={[1, 0.6]} speed ={5} translateY={['0vh', '30vh']}>
                <div className='scale-text'>lets work on your project</div>
            </Parallax>
        </div>
        // </div>
    );
}

export default TextZoomOut;