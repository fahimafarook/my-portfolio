import React, {useEffect, useState} from 'react';

function SlideAndHide() {
    const [hellos, setHellos] = useState(['hello', 'Nǐn hǎo','হ্যালো।', 'Bonjour', 'مرحبًا', 'Hola', 'Olá', 'नमस्ते। ', 'Dzień dobry','Chào chị', 'สวัสดี']);
    const [helloIndex, setHelloIndex] = useState(0);
    
    const dispayNextHello = () => {
        setHelloIndex((prevIndex) => (prevIndex + 1));
    } 

    useEffect(()=> {
        const intervalId = setInterval(dispayNextHello, 200);
    
    return () => {clearInterval(intervalId);};

    },[setHelloIndex])
    

    return (
        <div>
            <h1>{hellos[helloIndex]}</h1>
        </div>
    );
}

export default SlideAndHide;