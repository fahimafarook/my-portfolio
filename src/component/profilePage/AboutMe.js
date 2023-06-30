import React, { useRef, useEffect, useState } from 'react';
import TrueTextColorChange from '../helper/TrueTextColorChange';

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import '../../assets/css/profilePage.css';

function AboutMe(props) {
  const prevScrollPosition = useRef(0);
  const [sectionArrived, setSectionArrived] = useState(false);
  const quoteRef = useRef(null);
  let count = 0;

  useEffect(() => {

    if (count === 0) {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        ease: 'power3.out',
        trigger: ".parent-tag",
        start: "top top",
        end: "+=200%",
        pin: true,
         onEnter: () => {
          setSectionArrived(true);
          document.getElementsByClassName('parent-fixed-section')[0].style.backgroundColor = "black";
          // document.getElementsByClassName('vertical-bar')[0].style.backgroundColor = "rgb(166, 222, 67)";
          
          // document.getElementsByClassName('quote-1')[0].style.backgroundColor = "grey";
        },
        onLeaveBack: () => {
          setSectionArrived(false);
          document.getElementsByClassName('parent-fixed-section')[0].style.backgroundColor = "rgb(166, 222, 67)";
        },
      });
      count = count + 1;
    }

    return () => {
    };
  }, []);

  return (
    <div>
      <div className="parent-tag">
        <div ref={quoteRef} className='parent-fixed-section'>
        {/* <div className='vertical-bar'>vertical-bar</div> */}
          {/* <div className={`quote-1`}>Every solution leads to a betterment</div> */}
          <div className='readMore'>→</div>
          <div className='text-section'>
            <TrueTextColorChange  startReading = {sectionArrived}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;