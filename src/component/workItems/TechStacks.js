import React, { useEffect, useState, useRef} from 'react';
import "../../assets/css/workItems.css"
import htmlImage from "../../assets/css/images/html.png"
import cssImage from "../../assets/css/images/css.png"
import bootstrapImage from "../../assets/css/images/bootstrap.png"
import jsImage from "../../assets/css/images/js.png"
import reactImage from "../../assets/css/images/react.png"

import sql from "../../assets/css/images/mysql.png"
import java from "../../assets/css/images/java.png"
import spring from "../../assets/css/images/springboot.png"
import aws from "../../assets/css/images/aws.png"
import wordpress from "../../assets/css/images/wordpress.png"
import BgColorButton from '../helper/BgColorButton'
import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';


const initialCurve = 50;

function TechStacks() {
    const scrollDirectionChanged = useRef(false);
    const prevScrollPosition = useRef(0);
    const [xaxisScroll1, setXaxisScroll1] =  useState(0);
    const [xaxisScroll2, setXaxisScroll2] =  useState(0);
    const [curveSize, setCurveSize] = useState(50);
    const [loaded, setLoaded] = useState(false);

    const isVisibleRef = useRef(false);
    const containerRef = useRef(null);
    const curvedContainer = useRef(null);

    const techContent1 = [htmlImage, cssImage, wordpress,bootstrapImage, reactImage]
    const techContent2 = [sql, java, spring, aws, jsImage ]
 


    const [scrollTimer, setScrollTimer] = useState(null);
    function calculateCurve(targetElement) {
        let topPos = targetElement.getBoundingClientRect().top;
        if(topPos > 0)
            return 50;
        
        let eleHeight = targetElement.getBoundingClientRect().height;
        let conversionRate = (eleHeight / 1.5) / initialCurve; // -*-
        return initialCurve + (topPos / conversionRate);
    }

    useEffect(()=>{
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                isVisibleRef.current = true;
            } else {
                isVisibleRef.current = false;
            }
          });
        });
    
        const techStacksOnScroll = ()=>{
            let currentScrollPostion = window.scrollY;
            if(isVisibleRef.current){
                document.getElementsByClassName('tech-stack-header')[0].classList.add('is-visible') // =0=

                if(currentScrollPostion > prevScrollPosition.current)
                {
                    setXaxisScroll1((prev)=> prev < window.innerWidth / 8 ? prev+0.75 : prev);
                    setXaxisScroll2((prev)=> (-1 * prev) < window.innerWidth / 8 ? prev-0.75 : prev);
                }
                else{
                    setXaxisScroll1((prev)=> (-1 * prev) < window.innerWidth / 8 ? prev-0.75 : prev);
                    setXaxisScroll2((prev)=> prev < window.innerWidth / 8 ? prev+0.75 : prev);
                }
                prevScrollPosition.current =  currentScrollPostion;

                setCurveSize(calculateCurve(curvedContainer.current));
            }
            else{
                prevScrollPosition.current = window.scrollY; // =0=
                document.getElementsByClassName('tech-stack-header')[0].classList.remove('is-visible') // =0=
            }
        }


        window.addEventListener('scroll', techStacksOnScroll);
        let row1 = document.getElementsByClassName('row-1')[0];
        let row2 = document.getElementsByClassName('row-2')[0];

        curvedContainer.current = document.getElementsByClassName('work-item-section')[0]
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        setLoaded(true);

        return () => {
            window.removeEventListener('scroll', techStacksOnScroll);
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
          };
    },[])
    return (
    <div id = "work" className="work-item-section w-25pc h-1by1 pattern-grid-md yellow-darker bg-yellow">
        <div className={`tech-stack-header ${isVisibleRef.current? 'is-visible' : ''} `}> we can help you with</div>
        <div className='stack-parent container-fluid'  style= { window.innerWidth > 768 ? {transform: `rotate(${xaxisScroll1 >= 0 ? Math.min(xaxisScroll1/20, 4) : Math.max(xaxisScroll1/20, -4)}deg)`} : {}}>
            <hr className='ruller'></hr>
            <div ref={containerRef} className = "row-1 row justify-content-center h-40 align-top" style={{left: "0px", transform: `translate(${window.innerWidth < 768 ? 0 : xaxisScroll1}px, 0px) translate3d(0px, 0px, 0px)`}}>
                { 
                    techContent1.map((content, index) => (
                        <div className = {`image-background col-4 col-md-2 key=${index}`} style={{backgroundColor : ""}}>
                           {window.innerWidth >= 768 && <img className = "imageThing img-fluid"  src={content}></img>}

                            {window.innerWidth < 768 && <img className = "imageThing img-fluid"  src={content} style={{transform: `scale(${loaded ? 
                                    (document.getElementsByClassName('imageThing')[index].getBoundingClientRect().top < (window.innerHeight/2) && document.getElementsByClassName('imageThing')[index].getBoundingClientRect().bottom > (window.innerHeight/2)) ? "1.1" : "0.9"
                                    : "1"})`, 
                                    opacity:`${loaded ? 
                                        (document.getElementsByClassName('imageThing')[index].getBoundingClientRect().top < (window.innerHeight/2) && document.getElementsByClassName('imageThing')[index].getBoundingClientRect().bottom > (window.innerHeight/2)) ? "1" : "0.75"
                                        : "1"}`
                                        }}></img>}
                        </div>
                       
                    ))
                }
                { window.innerWidth < 768 && 
                
                    techContent2.map((content, index) => (
                        <div className = {`image-background col-4 col-md-2 key=${5 + index}`} style={{backgroundColor : ""}}>
                            {/* <img className = "imageThing img-fluid"  src={content}></img> */}

                            <img className = "imageThing img-fluid"  src={content} style={{transform: `scale(${loaded ? 
                                    (document.getElementsByClassName('imageThing')[5 + index].getBoundingClientRect().top < (window.innerHeight/2) && document.getElementsByClassName('imageThing')[5 + index].getBoundingClientRect().bottom > (window.innerHeight/2)) ?"1.1" : "0.9"
                                    : "1"})`, 
                                    opacity:`${loaded ? 
                                        (document.getElementsByClassName('imageThing')[5 + index].getBoundingClientRect().top < (window.innerHeight/2) && document.getElementsByClassName('imageThing')[5 + index].getBoundingClientRect().bottom > (window.innerHeight/2)) ? "1" : "0.75"
                                        : "1"}`
                                        }}></img>
                        </div>
                    ))
                }
            </div>
            <hr className='seprater row h-5'></hr>
            { window.innerWidth > 768 &&
                <div className = "row-2 row justify-content-center h-40 align-bottom" style={{left: "0px", transform: `translate(${xaxisScroll2}px, 0px) translate3d(0px, 0px, 0px)`}}>
                    {

                        techContent2.map((content, index) => (
                            <div className = {`image-background col-4 col-md-2 key=${index}`} style={{backgroundColor : ""}}>
                                <img className = "imageThing img-fluid"  src={content}></img>
                            </div>
                        ))
                    }
                </div>
            }
        </div>
        <hr className='ruller'></hr>
        <div className = "tub-parent">
            <div className='curved-frame' style={{borderRadius:`0 0 ${curveSize}% ${curveSize}%`}} />
        </div>
    </div>
    );
}

export default TechStacks;