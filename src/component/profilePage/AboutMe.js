import React, { useRef, useEffect, useState, useContext } from 'react';
import TrueTextColorChange from '../helper/TrueTextColorChange';

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import '../../assets/css/profilePage.css';
import { DeviceContext } from '../../App';

function AboutMe(props) {
  const prevScrollPosition = useRef(0);
  const [sectionArrived, setSectionArrived] = useState(false);
  const quoteRef = useRef(null);
  const deviceName = useContext(DeviceContext);
  const count = useRef(0);
  const [childValue, setChildValue] = useState('default');
  const scrollTriggerRef = useRef(null);

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
        end: `+=100%`,
        pin: true,
         onEnter: () => {
          console.log("on Nter--------------");
          setSectionArrived(true);
          document.getElementsByClassName('parent-fixed-section')[0].style.backgroundColor = "black"; // from up
          document.getElementsByClassName('read-more')[0].classList.remove('visible-up')
          document.getElementsByClassName('read-more')[0].classList.add('visible-down')
        },
        onLeaveBack: () => {
          console.log("on NEter- onLeaveBack-------------");
          document.getElementsByClassName('parent-fixed-section')[0].style.backgroundColor = "rgb(166, 222, 67)";
          setSectionArrived(false);
        },
        onLeave: () => {
          console.log("on NEter- onLeave-------------");
          setSectionArrived(false);
          document.getElementsByClassName('parent-fixed-section')[0].style.backgroundColor = "rgb(166, 222, 67)";
        }
      });

      ScrollTrigger.create({
        trigger: ".parent-tag",
        start: "bottom bottom",
        onEnter: () => {
        },
        onLeaveBack: () => { // 
          console.log("on leav-----");
          document.getElementsByClassName('parent-fixed-section')[0].style.backgroundColor = "black"; // from down
          document.getElementsByClassName('read-more')[0].classList.remove('visible-down')
          document.getElementsByClassName('read-more')[0].classList.add('visible-up')
          setSectionArrived(true);
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
            <TrueTextColorChange startReading = {sectionArrived} onChildValue={handleChildValue}/>
            <div className='read-more'>→</div>
            {/* {console.log("innerwidt", window.innerHeight, document.getElementsByClassName('parent-tag')[0].getBoundingClientRect().bottom)} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;