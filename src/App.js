import logo from './logo.svg';
import React, { useRef, useState, useEffect } from 'react';
import SlideAndHide from './component/profilePage/SlideAndHide'
import './App.css';
import ProfilePage from './component/profilePage/ProfilePage';
import './assets/css/profilePage.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './component/contact/ContactPage'
import AboutMe from './component/profilePage/AboutMe'
import WorkPage from './component/workItems/WorkPage'
import Headerbar from './component/helper/Headerbar'
import WorkPageSection from './component/workItems/WorkPageSection'
import WordColouring from './component/helper/WordColouring'
import TrueTextColorChange from './component/helper/TrueTextColorChange'
import ContactUsForm from './component/contact/ContactUsForm'
import InfiniteNameScroll from './component/profilePage/InfiniteNameScroll'
import LandingPage from './component/LandingPage'
import ContactUsSection from './component/contact/ContactUsSection'
import './assets/css/fonts/BebasNeue.woff2';
import { ParallaxProvider } from 'react-scroll-parallax';

export const DeviceContext = React.createContext();

function App() {
  const [screenName, setScreenName] = useState('phone');
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  const resizeHandler = () => {
    if (window.innerWidth < 768)
      setScreenName("phone");
    else if (window.innerWidth >= 768 && window.innerWidth < 1200)
      setScreenName("tab");
    else if (window.innerWidth >= 1200)
      setScreenName("laptop");
  }

  const onDismissHandler =()=>{
    setShowSplashScreen(false);
    
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    resizeHandler();
    document.addEventListener('resize', resizeHandler);

  }, []);


  useEffect(() => {
    if(showSplashScreen){
      document.body.style.overflow = "hidden";
      setTimeout(() => document.getElementById('profilePage').scrollIntoView(), 500)
    }
    else{
      resizeHandler(); // =0=
      document.body.style.overflow = "auto";
    }
    
  }, [showSplashScreen]);

  return (
    <div className="App">
      <ParallaxProvider>
      {showSplashScreen && <SlideAndHide showScreen = {setShowSplashScreen} /> }
        <Router>
          <DeviceContext.Provider value={screenName}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/contact" element={<ContactUsForm />} />
            </Routes>
            <Headerbar />
          </DeviceContext.Provider>
        </Router>
        </ParallaxProvider>
    </div>
  );
}

export default App;