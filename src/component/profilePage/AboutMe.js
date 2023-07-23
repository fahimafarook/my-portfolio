import React, { useRef, useEffect, useState, useContext } from 'react';
import TrueTextColorChange from '../helper/TrueTextColorChange';

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import '../../assets/css/profilePage.css';
import { DeviceContext } from '../../App';

function AboutMe(props) {
  const prevScrollPosition = useRef(0);
  const [sectionArrived, setSectionArrived] = useState(false);
  const [makeItGrey, setMakeItGrey] = useState(false);
  const [makeItWhite, setMakeItWhite] = useState(false);
  const quoteRef = useRef(null);
  const deviceName = useContext(DeviceContext);
  const count = useRef(0);
  const [childValue, setChildValue] = useState('default');
  const scrollTriggerRef = useRef(null);
  const scrollEnd = window.innerHeight < window.innerWidth ? '150' : '90' 

  const handleChildValue = (value) => {
    setChildValue(value);
    // console.log('Value received from child:', value.scrollDown);
    if(value.scrollDown){
      // updateScrollTrigger();
    }
  };

  const updateScrollTrigger = () => {
      const endValue = `+=0%`;
      scrollTriggerRef.current.scrollOptions.end = endValue;
      ScrollTrigger.update(); // Update the ScrollTrigger with the new 'end' value
    };

  useEffect(() => {
    if (count.current === 0) {
      gsap.registerPlugin(ScrollTrigger);

      const scrollTrigger = ScrollTrigger.create({
        ease: 'power3.out',
        trigger: ".parent-tag",
        start: "top top",
        end: `+=${scrollEnd}%`,
        pin: true,
         onEnter: () => {
          setSectionArrived(true);
          setMakeItWhite(false);
          setMakeItGrey(false);
        
          document.getElementsByClassName('parent-fixed-section')[0].style.backgroundColor = "black"; // from up
          document.getElementsByClassName('read-more')[0].classList.remove('visible-up')
          document.getElementsByClassName('read-more')[0].classList.add('visible-down')
        },
        onLeaveBack: () => {
          document.getElementsByClassName('parent-fixed-section')[0].style.backgroundColor = "rgb(166, 222, 67)";
          setSectionArrived(false);
          setMakeItGrey(true);
          setMakeItWhite(false);
        },
        onLeave: () => {
          setSectionArrived(false);
          setMakeItWhite(true);
          setMakeItGrey(false);
          document.getElementsByClassName('parent-fixed-section')[0].style.backgroundColor = "black";
        }
      });

      ScrollTrigger.create({
        trigger: ".parent-tag",
        start: "bottom bottom",
        onEnter: () => {
        },
        onLeaveBack: () => { // 
          document.getElementsByClassName('parent-fixed-section')[0].style.backgroundColor = "black"; // from down
          document.getElementsByClassName('read-more')[0].classList.remove('visible-down')
          document.getElementsByClassName('read-more')[0].classList.add('visible-up')
          setSectionArrived(true);
          setMakeItWhite(false);
          setMakeItGrey(false);
        },
        onLeave: () => {
         
        }
      });
      count.current = count.current + 1;
    }

    return () => {
    };
  }, []);

  return (
    <div id='aboutMe'>
      <div className="parent-tag">
        <div ref={quoteRef} className='parent-fixed-section'>
        {/* <div className='vertical-bar'>vertical-bar</div> */}
          {/* <div className={`quote-1`}>Every solution leads to a betterment</div> */}
          <div className='text-section'>
            <TrueTextColorChange makeItWhite = {makeItWhite} makeItGrey = {makeItGrey}  startReading = {sectionArrived} onChildValue={handleChildValue}/>
            <div className='read-more'>→</div>
            {/* {console.log("innerwidt", window.innerHeight, document.getElementsByClassName('parent-tag')[0].getBoundingClientRect().bottom)} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;