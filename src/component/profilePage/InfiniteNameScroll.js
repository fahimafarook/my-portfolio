import React, { useEffect, useState, useRef } from 'react';
import '../../assets/css/profilePage.css';

function InfiniteNameScroll(props) {
    const[leftValue1, setLeftValue1] = useState(0);
    const[leftValue2, setLeftValue2] = useState(0);
    const[xaxis1, setXaxis1] = useState(0);
    const[xaxis2, setXaxis2] = useState(0);
    const screenWidth = useRef(0);
    const scrollDirection = useRef('left');
    const prevScrollPosition = useRef(0);
    // const scrollSpeed = 0.125;
     const scrollSpeed = 1;

    useEffect(()=>{
        const setXaxis =()=>{
            // console.log(nameElemet1.getBoundingClientRect().right , "rightttt", nameElemet1.offsetWidth)
            if(scrollDirection.current == 'left'){
                setXaxis1((prevCount)=>prevCount - scrollSpeed)
                setXaxis2((prevCount)=>prevCount - scrollSpeed)
                let thresholdDistance = screenWidth.current*0.025
                
                let ElementToPlace = null;
                if(nameElemet1.getBoundingClientRect().right < 0) // means the ele1 is gone left into the screen
                    ElementToPlace = 1;
                else if(nameElemet2.getBoundingClientRect().right < 0)
                    ElementToPlace = 2;

                if(ElementToPlace != null) // there is some element out of vw
                {
                    console.log("DOnt come", ElementToPlace)
                    if(ElementToPlace ==1){ // to bring the left gone element to the right view
                        if((screenWidth.current - nameElemet2.getBoundingClientRect().right) > thresholdDistance){
                                // console.log('away from edge',ElementToPlace.getBoundingClientRect().left);

                                setXaxis1(0);
                                setLeftValue1(screenWidth.current);

                            }
                    }
                    else{
                        // console.log();
                        if((screenWidth.current - nameElemet1.getBoundingClientRect().right) > thresholdDistance){
                                // console.log('away from edge',ElementToPlace.getBoundingClientRect().left);
                                setXaxis2(0);
                                setLeftValue2(screenWidth.current);
                            }
                    }
                }  
            } 
            else if(scrollDirection.current == 'right'){
                setXaxis1((prevCount)=>prevCount + scrollSpeed)
                setXaxis2((prevCount)=>prevCount + scrollSpeed)
                let thresholdDistance = screenWidth.current*0.025
                
                let ElementToPlace = null;
                if(nameElemet1.getBoundingClientRect().left > screenWidth.current)
                    ElementToPlace = 1;
                else if(nameElemet2.getBoundingClientRect().left > screenWidth.current )
                    ElementToPlace = 2;

                if(ElementToPlace != null)
                {
                    if(ElementToPlace ==1){
                        if((nameElemet2.getBoundingClientRect().left) > thresholdDistance){
                                // console.log('away from edge',ElementToPlace.getBoundingClientRect().left);
                                setLeftValue1(nameElemet1.getBoundingClientRect().width*-1);
                                setXaxis1(0);
                            }
                    }
                    else{
                        if((nameElemet1.getBoundingClientRect().left) > thresholdDistance){
                                // console.log('away from edge',ElementToPlace.getBoundingClientRect().left);
                                setLeftValue2(nameElemet2.getBoundingClientRect().width*-1);
                                setXaxis2(0);
                            }
                    }
                }  
            }
            
        }

        const scrollHandler =()=>{
            if(prevScrollPosition.current > window.scrollY){ // scroll down
                scrollDirection.current = "left"
            }
            else {
                scrollDirection.current = "right"
            }
            prevScrollPosition.current = window.scrollY;
        }

        const intervalId = setInterval(setXaxis, 0.5);
        const nameElemet1 = document.getElementsByClassName('name1')[0];
        const nameElemet2 = document.getElementsByClassName('name2')[0];
        screenWidth.current = window.innerWidth;
        const scrollListner =  window.addEventListener('scroll', scrollHandler)
        // setLeftValue2(nameElemet1.getBoundingClientRect().width + window.innerWidth*0.025)
        // setLeftValue2(nameElemet1.scrollWidth)
        setLeftValue2(-10000)
        console.log(leftValue2, nameElemet1.getBoundingClientRect().right,nameElemet1.scrollWidth,  "Initial set")

        return () => {
            window.removeEventListener('scroll', scrollHandler);
            clearInterval(intervalId);
          };
          
    },[])


    return (
        <div className = "name-scroll-parent">
            <div className="name-scroll name1" style={{color:"red", left: `${leftValue1}px`, transform: `translate(${xaxis1}px, 0px) translate3d(0px, 0px, 0px)` }}>- fahima farook1 -</div>
            <div className="name-scroll name2" style={{ left: `${leftValue2}px`, transform: `translate(${xaxis2}px, 0px) translate3d(0px, 0px, 0px)` }}> - one two -  </div>
            {/* {console.log(leftValue1, leftValue2, "-----",screenWidth.current,"-----", xaxis1, xaxis2)} */}

        </div>
    );
}

export default InfiniteNameScroll;


