import React, { useEffect, useParams } from 'react';
import ProfilePage from './profilePage/ProfilePage'
import AboutMe from './profilePage/AboutMe'
import TechStacks from './workItems/TechStacks'
import ContactUsSection from './contact/ContactUsSection'
import FooterPage from './contact/FooterPage'
import Headerbar from './helper/Headerbar'
import '../assets/css/helper.css' //-*-
import NoLimitSection from './helper/NoLimitSection'
import TextZoomOut from './helper/TextZoomOut';


function LandingPage(props) {
    useEffect(() => {
    }, [])
    return (
        <div className="landing-page-container"> {/* -*- */}
            <ProfilePage/>
           
            <NoLimitSection/>
           
            <AboutMe />
            <TextZoomOut/>
           
            <TechStacks/>
            <ContactUsSection/>
        </div>
    );
}

export default LandingPage;