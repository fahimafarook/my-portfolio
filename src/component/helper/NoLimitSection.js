import React, {useEffect, useRef, useState} from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useParallax } from 'react-scroll-parallax';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function NoLimitSection() {

    const elementInMiddle = useRef(false);
    const triggerEle = useRef(null);
    const count = useRef(0);
    const scrollTrigger1 =useRef(null);
    const vx = window.innerHeight < window.innerWidth ? 'vh' : 'vw' 
    const scrollEnd = window.innerHeight < window.innerWidth ? '200' : '120' 
    const [testingVar, setTestingVar] = useState(0);
    
    let parallaxConfig = { 
        topLeft: {
            speed: -100,
            translateX: ['0px', '-2000px' ],
            translateY: ['0px', '-500px'],
            easing: "easeInQuad",
            scale: [1,1.5],
            targetElement: triggerEle.current,
            // disabled: !elementInMiddle.current,
            // startScroll: 1200,
            // endScroll: 2000

        },
        topMid: {
            speed: 5,
            translateY: ['0px', '-700px'],
            easing: "easeInQuad",
            targetElement: triggerEle.current
        },
        topRight: {
            speed: 5,
            translateX: ['0px', '1000px' ],
            translateY: ['0px', '-700px'],
            easing: "easeInQuad",
            targetElement: triggerEle.current,
            scale: [1,1.5]
        },
        midLeft: {
            speed: 5,
            translateX: ['0px', '-1000px'],
            translateY: ['0px', '0px'],
            easing: "easeInQuad",
            targetElement: triggerEle.current
        },
        midright: {
            speed: 5,
            translateX: ['0px', '1000px'],
            translateY: ['0px', '0px'],
            easing: "easeInQuad",
            targetElement: triggerEle.current,
            scale: [1,1.5]
        },
        bottomLeft: {
            speed: 5,
            translateX: ['0px', '-1000px' ],
            translateY: ['0px', '500px'],
            easing: "easeInQuad",
            targetElement: triggerEle.current
        },
        bottomMid: {
            speed: 5,
            translateY: ['0px', '700px'],
            easing: "easeInQuad",
            targetElement: triggerEle.current,
            scale: [1,1.5]
        },
        bottomRight: {
            speed: 5,
            translateX: ['0px', '1000px' ],
            translateY: ['0px', '700px'],
            easing: "easeInQuad",
            targetElement: triggerEle.current
        },

        letterN: {
            speed: 5,
            translateX: [`0${vx}`, `-56.5${vx}`],
            translateY: [`0${vx}`, `-10.3${vx}`],
            easing: "easeInQuad",
            targetElement: triggerEle.current
        },
        letterO: {
            speed: 5,
            translateX: [`0${vx}`, `-66.8${vx}`],
            translateY: [`0${vx}`, `9.5${vx}`],
            easing: "easeInQuad",
            targetElement: triggerEle.current
        },
        letterL: {
            speed: 5,
            translateX: [`0${vx}`, `-51.3${vx}`],
            translateY: [`0${vx}`, `0${vx}`],
            easing: "easeInQuad",
            targetElement: triggerEle.current 
        },
        letterI: {
            speed: 5,
            translateX: [`0${vx}`, `-25.6${vx}`], 
            translateY: [`0${vx}`, `9.5${vx}`],
            easing: "easeInQuad",
            targetElement: triggerEle.current
        },
        letterM: {
            speed: 5,
            translateX: [`0${vx}`, `-15.3${vx}`],
            translateY: [`0${vx}`, `-10.3${vx}`],
            easing: "easeInQuad",
            targetElement: triggerEle.current
        },
        letterT: {
            speed: 5,
            translateX: [`0${vx}`, `36.1${vx}`],
            translateY: [`0${vx}`, `9.5${vx}`],
            easing: "easeInQuad",
            targetElement: triggerEle.current 
        },
        letterS: {
            speed: 5,
            translateX: [`0${vx}`, `72.1${vx}`],
            translateY: [`0${vx}`, `0${vx}`],
            easing: "easeInQuad",
            targetElement: triggerEle.current
        },

        letterEye: {
            speed: 5,
            translateX: [`0${vx}`, `-15.3${vx}`],
            translateY: [`0${vx}`, `-10.3${vx}`],
            easing: "easeInQuad",
            targetElement: triggerEle.current
        },

    }


        useEffect(() => {
            if (count.current === 0) {
              gsap.registerPlugin(ScrollTrigger);
        
              scrollTrigger1.current = ScrollTrigger.create({
                ease: 'power3.out',
                trigger: ".no-limit-section",
                start: "top top",
                pin: true,
                end: `+=${scrollEnd}%`,
                 onEnter: () => {
                },
                onLeaveBack: () => {
                }, 
                onLeave: () => {
                } 
              });
              count.current = count.current + 1;
            }

            const handleScroll = () => {
                const elementPosition = document.getElementsByClassName('next-animae-trigger')[0]; 
                if (triggerEle && elementPosition.getBoundingClientRect().top >=  window.innerHeight) {  
                    elementInMiddle.current = true;
                } else {
                    elementInMiddle.current = false;
                }

                // setTestingVar((prev)=> prev+1)
              };
          
              window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);


    return (
        <div style={{ minHeight: "100vh"}}>
        <div className='no-limit-section'>
            <div className='key-board'> 
            <div className='board-row row-1'> 
            {testingVar}
                    <div className='keys' ref={useParallax(parallaxConfig['topLeft']).ref}><div className ='key-text'>q</div></div>
                    <div className='keys' ref={useParallax(parallaxConfig['topMid']).ref}><div className ='key-text'>w</div></div>
                    <div className='keys' ref={useParallax(parallaxConfig['topLeft']).ref}><div className ='key-text'>e</div></div>

                    <div className='keys' ref={useParallax(parallaxConfig['topRight']).ref}><div className ='key-text'>r</div></div>
                    <div className='keys' ref={useParallax(parallaxConfig['letterT']).ref}><div className ='key-text'>t</div></div> {/* */}
                    <div className='keys next-animae-trigger' ref={useParallax(parallaxConfig['bottomMid']).ref}><div className ='key-text'>y</div></div>

                    <div className='keys' ref={useParallax(parallaxConfig['topRight']).ref}><div className ='key-text'>u</div></div>
                    <div className='keys' ref={useParallax(parallaxConfig['letterI']).ref}><div className ='key-text'>i</div></div> {/* */}
                    <div className='keys' ref={useParallax(parallaxConfig['letterO']).ref}><div className ='key-text'>o</div></div> {/* */}

                    <div className='keys' ref={useParallax(parallaxConfig['topRight']).ref}><div className ='key-text'>p</div></div>
                    
                </div>
                <div className='board-row row-2'>
                    <div className='keys' ref={useParallax(parallaxConfig['midLeft']).ref}><div className ='key-text'>a</div></div>
                    <div className='keys' ref={useParallax(parallaxConfig['letterS']).ref}><div className ='key-text'>s</div></div> {/* */}
                    <div className='keys' ref={useParallax(parallaxConfig['bottomMid']).ref}><div className ='key-text'>d</div></div>

                    <div className='keys' ref={useParallax(parallaxConfig['topMid']).ref}><div className ='key-text'>f</div></div>
                    <div className='keys' ref={useParallax(parallaxConfig['topLeft']).ref} ><div className ='key-text'>g</div></div>
                    <div className='keys' ref={useParallax(parallaxConfig['midright']).ref}><div className ='key-text'>h</div></div>

                    <div className='keys' ref={useParallax(parallaxConfig['topMid']).ref}><div className ='key-text'>j</div></div>
                    <div className='keys' ref={useParallax(parallaxConfig['bottomRight']).ref}><div className ='key-text'>k</div></div>
                    <div className='keys' ref={useParallax(parallaxConfig['letterL']).ref}><div className ='key-text'>l</div></div> {/* */}
                </div>
                <div className='board-row row-3'> 
                    <div className='keys' ref={useParallax(parallaxConfig['bottomLeft']).ref} ><div className ='key-text'>z</div></div>
                    <div className='keys' ref={useParallax(parallaxConfig['bottomRight']).ref} ><div className ='key-text'>x</div></div>
                    <div className='keys' ref={useParallax(parallaxConfig['midLeft']).ref} ><div className ='key-text'>c</div></div>

                    <div className='keys' ref={useParallax(parallaxConfig['topRight']).ref} ><div className ='key-text'>v</div></div>
                    <div className='keys' ref={useParallax(parallaxConfig['bottomRight']).ref} ><div className ='key-text'>b</div></div>
                    <div className='keys' ref={useParallax(parallaxConfig['letterN']).ref}><div className ='key-text'>n</div></div> {/* */}

                    <div className='keys' ref={useParallax(parallaxConfig['letterM']).ref} ><div className ='key-text'>m</div></div> {/* */}

                    <div className='enter-key' ref={useParallax(parallaxConfig['letterEye']).ref} ><div className ='key-text'>!</div></div>
                    
                </div> 
            </div>
            <hr ref = {triggerEle} className='trigger-line'></hr>
        </div>
        </div>
    );
}

export default NoLimitSection;
