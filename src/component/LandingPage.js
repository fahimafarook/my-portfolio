import React from 'react';
import ProfilePage from './profilePage/ProfilePage'
import AboutMe from './profilePage/AboutMe'
import TechStacks from './workItems/TechStacks'
import ContactUsSection from './contact/ContactUsSection'
import FooterPage from './contact/FooterPage'
import '../assets/css/helper.css' //-*-


function LandingPage(props) {
    return (
        <div className="landing-page-container"> {/* -*- */}
            <ProfilePage/>
            <AboutMe/>
            {/* <TechStacks/>
            <ContactUsSection/> */}
        </div>
    );
}

export default LandingPage;