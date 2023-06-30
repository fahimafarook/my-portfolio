import React, { useEffect, useState, useRef } from 'react';
import '../../assets/css/contact.css'
import BgColorButton from '../helper/BgColorButton'
import FooterPage from './FooterPage'

function ContactUsSection(props) {
    
    const [xaxisScroll1, setXaxisScroll1] =  useState(-250); //-250
    const [yaxis, setYaxis] = useState(-500); //-*-
    const isVisible = useRef(false);
    const prevScrollPosition = useRef(0);
    const letsWorkRef = useRef(null);
    const [currentTime, setCurrentTime] = useState('');

    const contactSectionScroll = ()=>{
      if(isVisible.current){
        let currentScrollPostion = window.scrollY;
        let scrollDistance = currentScrollPostion - prevScrollPosition.current  //-*-
        if(currentScrollPostion > prevScrollPosition.current)// scroll up - page move up
        {
            setXaxisScroll1((prev)=>prev+(scrollDistance/5));   //-*-
            setYaxis((prev)=> prev < 0? prev+(scrollDistance/2) : 0) //-*-
            
        }
        else{ // scroll down 
            setXaxisScroll1((prev)=>prev+(scrollDistance/5));   //-*-
            setYaxis((prev)=>prev > -500 ? (prev+(scrollDistance)/2) : -500) //-*-
        }
        prevScrollPosition.current =  currentScrollPostion;
      }
      else{
        setXaxisScroll1(0);
        setYaxis(-500); //-*-
      }
  }

 
    useEffect(()=>{

      const interval = setInterval(() => {
        const now = new Date();
        const options = { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric' };
        const timeString = now.toLocaleTimeString('en-IN', options);
        setCurrentTime(timeString);
      }, 1000);
      
      const performAutoScroll = () => {               // -*-
        console.log('performAutoScroll');
        contactUsButtonEle.scrollIntoView(true);
      }


        window.addEventListener('scroll', contactSectionScroll);
        // window.addEventListener('scroll', performAutoScroll); // -*-
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              isVisible.current = true;
            } else {
              isVisible.current = false;
            }
          });
        })
       

        if (letsWorkRef.current) {
            observer.observe(letsWorkRef.current);
        
        }

        const contactUsButtonEle = document.getElementsByClassName('contact-us-button')[0]; // -*-

        return () => {
            window.removeEventListener('scroll', contactSectionScroll);
            // window.removeEventListener('scroll', performAutoScroll); // -*-
            if (letsWorkRef.current) {
                observer.unobserve(letsWorkRef.current);
              }
            };
    },[])

    return (
        <div className={`contact-section-container`} style ={{transform: `translateY(${yaxis}px)`}}>
            <div ref={letsWorkRef} className={`lets-work-on ${isVisible.current ? 'lets-work-on-visible' : ''}`} >let's work on your project</div>
            {/* <BgColorButton className = "mail-id-button" buttonName = "fahimafarook510@gmail.com"/>
            <BgColorButton className = "phone-number-button" buttonName = "+91-8072498545"/> */}
            <div className={`parent-send-email`}>
              <div className={`send-me-email`}>send me an email</div>
              <div className={`email-arrow`}></div>
            </div>
            {/* <hr className='hr-custom'></hr> */}
            {/* <button className='contact-us-button' style={{transform: `translateX(${xaxisScroll1}px`}}>contact us</button> */}
            <div className='footer'>
              <div className='time-parent'>
                <div className='loacal-time-text'>local time</div>
                <div className='loacal-time'>{currentTime}</div>
              </div>
              <div className='footer-contact'>
                <div className='linkedin'>Linkedin</div>
                <div className='mail-id'>fahimafarook510@gmail.com</div>
                <div className='code-by'>code by fahima</div>
              </div>
            </div>
        </div>
    );
}

export default ContactUsSection;



