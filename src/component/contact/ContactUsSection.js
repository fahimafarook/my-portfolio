import React, { useEffect, useState, useRef, useContext } from 'react';
import '../../assets/css/contact.css'
import BgColorButton from '../helper/BgColorButton'
import FooterPage from './FooterPage'
import { DeviceContext } from '../../App';
import linkedinIcon from "../../assets/css/images/linkedin-icon.png"
import gmailIcon from "../../assets/css/images/gmail-icon.png"
import { Navigate } from 'react-router-dom';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import leftHand from "../../assets/css/images/blackHand4.svg"
import rightHand from "../../assets/css/images/whiteHand3.svg"

function ContactUsSection(props) {

   const deviceName = useContext(DeviceContext);
    
    const [xaxisScroll1, setXaxisScroll1] =  useState(-250); //-250
    const [yaxis, setYaxis] = useState(-500); //-*-
    const isVisible = useRef(false);
    const prevScrollPosition = useRef(0);
    const letsWorkRef = useRef(null);
    const [currentTime, setCurrentTime] = useState('');
    const leftHandRef = useRef(null);
    const footerIsVisisbe = useRef(false);
    const footerRef = useRef(false);
    let count = 0;

      const contactSectionScroll = ()=>{
          if(isVisible.current){
            let currentScrollPostion = window.scrollY;
            let scrollDistance = currentScrollPostion - prevScrollPosition.current  //-*-
            let factor = 2;
            if(window.innerHeight <= 700)
            {
              factor = 1.5;
            }
            if(currentScrollPostion > prevScrollPosition.current)// scroll up - page move up
            {
                setXaxisScroll1((prev)=>prev+(scrollDistance/5));   //-*-
                setYaxis((prev)=> prev < 0? prev+(scrollDistance/factor) : 0) //-*-
                
            }
            else{ // scroll down 
                setXaxisScroll1((prev)=>prev+(scrollDistance/5));   //-*-
                setYaxis((prev)=>prev > -500 ? (prev+(scrollDistance)/factor) : -500) //-*-
            }
            prevScrollPosition.current =  currentScrollPostion;
          }
          else{
            setXaxisScroll1(0);
            setYaxis(-500); //-*-
          }
      }

      const NavigateToLinkedin =()=>{
        window.open('https://www.linkedin.com/in/fahima-farook/');
      }

      const openMailBox = ()=>{
        window.open("mailto:fahimafarook05@gmail.com?subject=lets build the big thing! &body= Hey pal,%0D%0A%0D%0A I would like to enquire about ....");
      }

 
      useEffect(()=>{
      const interval = setInterval(() => {
        const now = new Date();
        const options = { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric' };
        const timeString = now.toLocaleTimeString('en-IN', options);
        setCurrentTime(timeString);
      }, 1000);
      
      const performAutoScroll = () => {            
        contactUsButtonEle.scrollIntoView(true);
      }

        window.addEventListener('scroll', contactSectionScroll);
        const observer1 = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
              isVisible.current = true;
            } else {
              isVisible.current = false;
              
            }
          });
        })

        const observer2 = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
              footerIsVisisbe.current = true;
            } 
            else{
              footerIsVisisbe.current = false;
            }
          });
        })
       

        if (letsWorkRef.current) {
            observer1.observe(letsWorkRef.current);
        }

        if(footerRef.current){
          observer2.observe(footerRef.current);
        }

        const contactUsButtonEle = document.getElementsByClassName('contact-us-button')[0]; // -*-

        return () => {
            window.removeEventListener('scroll', contactSectionScroll);
            // window.removeEventListener('scroll', performAutoScroll); // -*-
            if (letsWorkRef.current) {
                observer1.unobserve(letsWorkRef.current);
              }
            if(footerRef.current){
              observer2.unobserve(footerRef.current);
            }
            };
    },[])


    return (
        <div className={`contact-section-container`} style ={{transform: `translateY(${footerIsVisisbe.current ? 0 :yaxis}px)`}}>

          <div className="row justify-content-end mt-5"> 
              <div ref={letsWorkRef} className={`lets-work-on ${deviceName=="phone"? "lets-work-on-mobile-font":""} ${isVisible.current ? 'lets-work-on-visible' : ''} col-12 col-md-12 justify-content-end`} >let's work on your project</div>
          </div>
          <div className="row hands">
            <img className={`left-hand col-6 ${footerIsVisisbe.current ? 'left-hand-animate' : ''}` } style={{backgroundColor: "white", padding:"0"}} src={leftHand}></img>
            <img className={`right-hand col-6  ${footerIsVisisbe.current ? 'right-hand-animate' : ''}`} style={{backgroundColor: "white", padding:"0"}} src={rightHand}></img>
          </div>
          <div className = {`boom ${footerIsVisisbe.current ? 'boom-effect' : ''}`}></div>
          <pre onClick={openMailBox} className = {`send-email ${footerIsVisisbe.current ? 'pop-send-email' : ''}`}>{` let's  talk` }</pre>

          <div  ref={footerRef} className={`footer row ${deviceName=="phone"? "footer-mobile-font":""} justify-content-between`}>
            <div className='time-parent col-2'>
              <div className='loacal-time-text'>local time</div>
              <div className='loacal-time'>{currentTime}</div>
            </div>
            <div id='contactUs' className='footer-contact col-7 col-md-6 row justify-content-around h-50 align-item-bottom'>
                <div className={`linkedin col-2 col-md-2`} onClick={NavigateToLinkedin}>
                  {deviceName === "phone" ? <img className='footer-icon' src={linkedinIcon} /> : "Linkedin"}
                </div>
                <div className='mail-id col-2 col-md-6' onClick={openMailBox}>
                  {deviceName === "phone" ? <img className='footer-icon' src={gmailIcon} /> : "fahimafarook05@gmail.com"}
                </div>
                <div className='code-by col-6 col-md-3'>+91 8667790191</div>
            </div>
          </div>
        </div>
    );
}

export default ContactUsSection;



