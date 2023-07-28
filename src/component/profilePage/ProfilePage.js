import React, { useEffect,  useContext, useState} from 'react';
import '../../assets/css/helper.css';
import InfiniteNameScroll from './InfiniteNameScroll'
import '../../assets/css/profilePage.css';
import { DeviceContext } from '../../App';
import SlideAndHide from './SlideAndHide'

function ProfilePage() {

    const [showSlideAndHide, setShowSlideAndHide] = useState(true);

    const handleSlideAndHideFinish = () => {
        setShowSlideAndHide(false);
      };

    const deviceName = useContext(DeviceContext);

    useEffect(()=>{ const topLeftTransfer = () =>{
        const element = document.getElementsByClassName("top-left-text")[0];
        if(element.textContent == "🅲🅾🅳🅴 ϟ")
            element.textContent = "🅱🆄🅸🅻🅳 ϟ";
        else
            element.textContent = "🅲🅾🅳🅴 ϟ";
    }

    const interval = setInterval(topLeftTransfer, 2000);

    return()=>{
        clearInterval(interval);
    }
   },[])
   
    return (
        <div id='profilePage' className='profile-page container-fluid'>
            <div className='top-left-text col-4 col-md-1 justify-content-start'></div>
            {(deviceName === "tab" || deviceName === "laptop") && <div className = "locatedAt">
                <pre className='located-at-text'>{`located at 
coimbatore  ♥  India
                `}</pre>
            </div>}
            {deviceName == "phone" && <div className = "mobile-locatedAt">
                <div className = "mobile-located-at-text">{`India`}</div>
            </div>}
            <div className='running-name-box'>
                 <div className = "running-name">codespice . codespice . codespice . codespice . codespice</div>
            </div>
            <div class="scroll-down">
                <span></span>
                <span></span>
                <span></span>
            </div>
                <div className = "freelancer col-10 justify-content-end col-md-4">freelance developers</div>
             {/* {showSlideAndHide && <SlideAndHide onFinish={handleSlideAndHideFinish} />} */}
        </div>
    );
}

export default ProfilePage;