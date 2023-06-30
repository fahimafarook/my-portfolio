import React, { useState } from 'react';
import '../../../src/assets/css/contact.css'
import BgColorButton from '../helper/BgColorButton'

function ContactUsForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [orgName, setOrgName] = useState('');
    const [service, setService] = useState('');
    const [message, setMessage] = useState('');

    const submitAction =()=>{
    }

    return (
      <div>
        <form className="form-container" style={{background: "rgb(21, 21, 21)"}} onSubmit={submitAction}>
          <div className="lets-work-title">Let's work on your project togather</div>
          <div className="horizontal-line"></div>
          <label className = "lablel">1. Your name?</label>
          <input className = "input"
            placeholder="fahima farook"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

        <div className="horizontal-line"></div>
        <label className = "lablel">2. Your mailId?</label>
          <input className = "input"
            placeholder="fahimafarook510@gmail.com"
            type="text"
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
            }}
          />

        <div className="horizontal-line"></div>
        <label className = "lablel">3. Name of your organisation?</label>
          <input className = "input"
            placeholder="unicron"
            type="text"
            value={orgName}
            onChange={(e) => {
                setOrgName(e.target.value);
            }}
          />   

          <div className="horizontal-line"></div>
          <label className = "lablel">4. The service your looking for?</label>
          <input className = "input"
            placeholder="website building, web application building"
            type="text"
            value={service}
            onChange={(e) => {
              setService(e.target.value);
            }}
          /> 

        <div className="horizontal-line">.</div>
        <label className = "lablel">5. Your message?</label>
          <input className = "input"
            placeholder="hey fahima, can u help me with building a website which can"
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          /> 
           <hr className='hr-custom'></hr>
            <button className='contact-us-button' type="submit" buttonName = "send">contact us</button>
        </form>
      </div>
    );
  }

export default ContactUsForm;