import React, {useEffect, useRef, useState} from 'react';
import '../../assets/css/helper.css'
import HeaderIcon from '../helper/HeaderIcon';

function SlideAndHide(props) {
    const [hellos, setHellos] = useState(['hello', 'வணக்கம்', 'హలో', 'Nǐn hǎo', 'ഹലോ', 'হ্যালো।', 'Bonjour', 'مرحبًا', 'ನಮಸ್ಕಾರ', 'Hola', 'Olá', 'नमस्ते। ','Chào chị', 'สวัสดี']);
    const hellosLength = hellos.length;
    const [helloIndex, setHelloIndex] = useState(0);
    const ready = useRef(false);
    
    const dispayNextHello = () => {
        setHelloIndex((prevIndex) => (prevIndex + 1));
    } 

    useEffect(()=> {
        const intervalId = setInterval(dispayNextHello, 200);
    
    return () => {clearInterval(intervalId);
       };

    },[setHelloIndex])
    

    return (
        <div className='splash-screen'>
            <div className={`upper-rect ${helloIndex >= hellosLength? 'tranform-upper-rect': ""}`}></div>
            <div className={`lower-rect ${helloIndex >= hellosLength? 'tranform-lower-rect': ""}`}></div>
            {/* <div className={`hello-container`}> */}
            <div className={`hello-container ${helloIndex >= hellosLength? 'ready-text': ""}`}>
                <div className='hellos'>{`${helloIndex >= hellosLength? 'B000M': hellos[helloIndex]}`}</div>
            </div>
            {helloIndex >= hellosLength && setTimeout(() => props.showScreen(false), 3000)}
        </div>
    );
}

export default SlideAndHide;