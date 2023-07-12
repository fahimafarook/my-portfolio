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

const initialCurve = 50;

function TechStacks() {
    const scrollDirectionChanged = useRef(false);
    const prevScrollPosition = useRef(0);
    const [xaxisScroll1, setXaxisScroll1] =  useState(0);
    const [xaxisScroll2, setXaxisScroll2] =  useState(0);
    const [curveSize, setCurveSize] = useState(50);

    const isVisibleRef = useRef(false);
    const containerRef = useRef(null);
    const curvedContainer = useRef(null);

    const techContent1 = [htmlImage, cssImage, bootstrapImage, jsImage, reactImage]
    const techContent2 = [sql, java, spring, aws, reactImage]
 


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
                if(currentScrollPostion > prevScrollPosition.current)
                {
                    setXaxisScroll1((prev)=>prev+0.5);
                    setXaxisScroll2((prev)=>prev-0.5);
                }
                else{
                    setXaxisScroll1((prev)=>prev-0.5);
                    setXaxisScroll2((prev)=>prev+0.5);
                }
                prevScrollPosition.current =  currentScrollPostion;

                setCurveSize(calculateCurve(curvedContainer.current));
            }
        }


        window.addEventListener('scroll', techStacksOnScroll);
        let row1 = document.getElementsByClassName('row-1')[0];
        let row2 = document.getElementsByClassName('row-2')[0];

        curvedContainer.current = document.getElementsByClassName('work-item-section')[0]
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            window.removeEventListener('scroll', techStacksOnScroll);
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
          };
    },[])
    return (

    <div className="work-item-section w-25pc h-1by1 pattern-grid-md yellow-darker bg-yellow">
        <div className={`tech-stack-header ${isVisibleRef.current? 'is-visible' : ''}`}>we can help you with</div>
        <div className='stack-parent container-fluid'>
            <hr className='ruller'></hr>
            <div ref={containerRef} className = "row-1 row justify-content-center h-40 align-top" style={{left: "0px", transform: `translate(${window.innerWidth < 768 ? 0 : xaxisScroll1}px, 0px) translate3d(0px, 0px, 0px)`}}>
                {
                    techContent1.map((content, index) => (
                        <div className = {`image-background col-4 col-md-2 key=${index}`} style={{backgroundColor : ""}}>
                            <img className = "imageThing img-fluid"  src={content}></img>
                        </div>
                    ))
                }
                { window.innerWidth < 768 && 

                    techContent2.map((content, index) => (
                        <div className = {`image-background col-4 col-md-2 key=${index}`} style={{backgroundColor : ""}}>
                            <img className = "imageThing img-fluid"  src={content}></img>
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