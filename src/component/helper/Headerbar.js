import React, { useEffect, useRef, useState, useContext } from 'react';
import '../../assets/css/profilePage.css';
import '../../assets/css/helper.css';
import { useNavigate } from 'react-router-dom';
import BouncyButton from './BouncyButton'
import HeaderIcon from '../helper/HeaderIcon'
import ContactUsSection from '../contact/ContactUsSection';
import { DeviceContext } from '../../App';

function Headerbar() {

    const deviceName = useRef(useContext(DeviceContext)); // =0=
    deviceName.current = useContext(DeviceContext); // =0=
    
    const[headerbar, setHeaderbar] = useState(true);
    const[headerIcon, setHeaderIcon] = useState(false);
    const[barOrIcon, setBarOrIcon] = useState("bar"); // icon , bar , bloom, fade
    const headerTopValue =  useRef(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);


    const popOutBar = () => {
        setIsPopupVisible(true);
        
    };

    const closeHeaderSlider = () => {
        setIsPopupVisible(false);
        bloom();
    }

    const handleScroll = () => {
        if(deviceName.current != "phone"){
            if(headerTopValue.current.getBoundingClientRect().bottom > - 100.0){ // to change it to bar, if we dont consider bloom/fade
                setBarOrIcon((prev) => prev === "icon"? fade() : "bar" );
            }
            else{  // to change it to icon, if we dont consider bloom/fade
                setBarOrIcon((prev) => prev === "bar"? bloom() : "icon" );
            }
        }
    }

      function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      async function bloom(){
        let maxSize = deviceName.current === "phone" ? 60 : 70;
        for(let i = 0.1; i <= 1; i=i+0.1){
            await delay(20);
            document.getElementsByClassName('header-icon')[0].style.height = `${maxSize*i}px`;
            document.getElementsByClassName('header-icon')[0].style.width = `${maxSize*i}px`;
        }
        return "icon";
      }

      async function fade(){
        let maxSize = deviceName.current === "phone" ? 60 : 70;
        setIsPopupVisible(false);
        for(let i = 1; i >= 0; i=i-0.1){
            await delay(20);
            document.getElementsByClassName('header-icon')[0].style.height = `${maxSize*i}px`;
            document.getElementsByClassName('header-icon')[0].style.width = `${maxSize*i}px`;
        }
        return "bar";
      }

    useEffect(()=>{

        function setHeaderSize(){
            if(window.innerWidth < 576){
                setBarOrIcon('icon')
                bloom();
            }
        }

        window.addEventListener('scroll', handleScroll);
        headerTopValue.current = document.getElementsByClassName('headerButtonContainer')[0];
        setHeaderSize();
        
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };

    },[])
    const navigate = useNavigate();

    const handleRedirect = (page) => {
        let pathMap = {"workPage" : "work", "aboutPage" : "aboutMe", "contactPage" : "contactUs"}
        const section = document.getElementById(pathMap[page]);
        section.scrollIntoView({ behavior: 'smooth' });
        // switch(page){
        // case 'workPage':
        //     navigate('/#work');
        //     break;
        // case 'aboutPage':
        //     navigate('/#aboutMe');
        //     break;
        // case 'contactPage':
        //     navigate('/#contactUs');
        //     break;
        // }
    };
    
    return (
        <div>
            <div className = "headerButtonContainer">
            {barOrIcon === "bar" &&  <BouncyButton className = "headerButton About" onClick={()=>handleRedirect("aboutPage")} buttonName = 'about'/>}
            {barOrIcon === "bar" && <BouncyButton className = "headerButton working" onClick={()=>handleRedirect("workPage")} buttonName = 'work'/>}
            {barOrIcon === "bar" && <BouncyButton className = "headerButton Contact" onClick={()=>handleRedirect("contactPage")} buttonName = 'contact'/>}
            {!isPopupVisible && <HeaderIcon className = "col-2 justify-content-end col-md-3" onClick={popOutBar} />}
                {isPopupVisible && 
                    <div className='header-slide-bar'>
                        <button className = "slider-button slider-close" onClick={closeHeaderSlider}>→</button>
                        <button className = "slider-button" onClick={()=>handleRedirect("aboutPage")}>about</button>
                        <button className = "slider-button" onClick={()=>handleRedirect("workPage")}>work</button>
                        <button className = "slider-button" onClick={()=>handleRedirect("contactPage")}>contact</button>
                    </div>}
      </div>
        </div>
    );
}

export default Headerbar;

