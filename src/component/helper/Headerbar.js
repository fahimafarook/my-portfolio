import React, { useEffect, useRef, useState } from 'react';
import '../../assets/css/profilePage.css';
import '../../assets/css/helper.css';
import { useNavigate } from 'react-router-dom';
import BouncyButton from './BouncyButton'
import HeaderIcon from '../helper/HeaderIcon'
import ContactUsSection from '../contact/ContactUsSection';

function Headerbar() {
    
    const[headerbar, setHeaderbar] = useState(true);
    const[headerIcon, setHeaderIcon] = useState(false);
    const[barOrIcon, setBarOrIcon] = useState("bar"); // icon , bar , bloom, fade
    const headerTopValue =  useRef(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);


    const popOutBar = () => {
        console.log("sorvu");
        setIsPopupVisible(true);
        
    };

    const closeHeaderSlider = () => {
        // fadeSlider();
        setIsPopupVisible(false);
        bloom();
    }

    const onResize = ()=> {
        if(window.innerWidth < 576){
            setBarOrIcon('icon')
            console.log("it came here");
            bloom();
        }
    }

    const handleScroll = () => {
        if(headerTopValue.current.getBoundingClientRect().bottom > - 100.0){ // to change it to bar, if we dont consider bloom/fade
            setBarOrIcon((prev) => prev === "icon"? fade() : "bar" );
        }
        else{  // to change it to icon, if we dont consider bloom/fade
            setBarOrIcon((prev) => prev === "bar"? bloom() : "icon" );
        }
      };

      function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      async function bloom(){
        let maxSize = 70;
        for(let i = 0.1; i <= 1; i=i+0.1){
            await delay(20);
            document.getElementsByClassName('header-icon')[0].style.height = `${maxSize*i}px`;
            document.getElementsByClassName('header-icon')[0].style.width = `${maxSize*i}px`;
        }
        return "icon";
      }

      async function fade(){
        let maxSize = 70;
        setIsPopupVisible(false);
        for(let i = 1; i >= 0; i=i-0.1){
            await delay(20);
            document.getElementsByClassName('header-icon')[0].style.height = `${maxSize*i}px`;
            document.getElementsByClassName('header-icon')[0].style.width = `${maxSize*i}px`;
        }
        return "bar";
      }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', onResize)
        headerTopValue.current = document.getElementsByClassName('headerButtonContainer')[0];
        onResize();
        
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };

    },[])
    const navigate = useNavigate();
            const handleRedirect = (page) => {
            switch(page){
            case 'workPage':
                navigate('/work');
                break;
            case 'aboutPage':
                navigate('/about');
                break;
            case 'contactPage':
                navigate('/contact');
                break;
            }
    };
    
    return (
        <div>
            <div className = "headerButtonContainer">
                {barOrIcon === "bar" && <BouncyButton className = "headerButton working" onClick={()=>handleRedirect("workPage")} buttonName = 'work'/>}
                {barOrIcon === "bar" &&  <BouncyButton className = "headerButton About" onClick={()=>handleRedirect("aboutPage")} buttonName = 'about'/>}
                {barOrIcon === "bar" && <BouncyButton className = "headerButton Contact" onClick={()=>handleRedirect("contactPage")} buttonName = 'contact'/>}
                {!isPopupVisible && <HeaderIcon onClick={popOutBar} />}
                    {isPopupVisible && 
                        <div className='header-slide-bar'>
                            <button className = "slider-button slider-close" onClick={closeHeaderSlider}>→</button>
                            <button className = "slider-button">about</button>
                            <button className = "slider-button">work</button>
                            <button className = "slider-button">contact</button>
                        </div>}
            </div>
        </div>
    );
}

export default Headerbar;

