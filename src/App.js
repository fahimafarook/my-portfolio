import logo from './logo.svg';
import './App.css';
import SlideAndHide from "./component/profilePage/SlideAndHide"
import ProfilePage from './component/profilePage/ProfilePage';
import './assets/css/profilePage.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './component/contact/ContactPage'
import AboutMe from './component/profilePage/AboutMe'
import WorkPage from './component/workItems/WorkPage'
import { useEffect } from 'react';
import Headerbar from './component/helper/Headerbar'
import WorkPageSection from './component/workItems/WorkPageSection'
import WordColouring from './component/helper/WordColouring'
import TrueTextColorChange from './component/helper/TrueTextColorChange'
import ContactUsForm from './component/contact/ContactUsForm'
import InfiniteNameScroll from './component/profilePage/InfiniteNameScroll'
import LandingPage from './component/LandingPage'
import ContactUsSection from './component/contact/ContactUsSection'


function App() {

  useEffect(() => {

  },[])

  return (
    <div className="App">
    {/* <SlideAndHide/> */}
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactUsForm />} />
        </Routes>
        <Headerbar/>
      </Router>
    </div>
  );
}

export default App;
