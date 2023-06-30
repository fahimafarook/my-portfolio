import React, { useEffect } from 'react';
import '../../assets/css/helper.css';
import InfiniteNameScroll from './InfiniteNameScroll'
import '../../assets/css/profilePage.css'

function ProfilePage() {

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
        <div className='profile-page container-fluid'>
            <div className = "row h-10 justify-content-start">
                <div className='top-left-text col-6 col-md-2'></div>
            </div>
            <div className = "locatedAt" >located at coimbatore ♥︎  India</div>
            <div className = "freelancer">freelance developer</div>
            <div className='running-name-box'>
                 <div className = "running-name">fahima farook . fahima farook . fahima farook . fahima farook . fahima farook .</div>
            </div>
            {/* <InfiniteNameScroll scrollText = "fahima farook - fahima farook - "/> */}
        </div>
    );
}

export default ProfilePage;