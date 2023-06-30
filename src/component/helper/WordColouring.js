import React, { useState, useEffect } from 'react';
import '../../assets/css/helper.css'

function WordColouring() {
    const [scrollPos, setSetScrollPos] = useState(0);

    useEffect(()=>{
        const scrollAction = ()=>{
            setSetScrollPos((prev) => prev+1);
        }

        window.addEventListener('scroll', scrollAction)

    return () => {
        window.removeEventListener('scroll', scrollAction);
        };

    }, [])
    return (
        <div className='container'>
            <div className = "the-space-up">space</div>
            <h1 className ="twins1" style={{transform: `translateX(${window.scrollY/5}px`}}>its me fahima farook</h1>
            <div className= "the-square">
                <h1 className ="twins2" style={{transform: `translateX(${window.scrollY/5}px`}}>its me fahima farook</h1>
            </div>
            <div className = "the-space-down">space</div>
        </div>
    );
}

export default WordColouring;