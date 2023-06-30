import React, { useState, useEffect, useRef } from 'react';
import '../../assets/css/helper.css'

function TrueTextColorChange(props) {
    const [scrollPos, setSetScrollPos] = useState(0);
    const prevScrollPosition = useRef(0);
    const lines = ["__","Im fahima, two plus years of experience",
     "as software engineer. I can help u in building ur",
      "cool dynamic website, And how we do it ?? we",
      "can design ur website, put in ur requirments and needs,",
      "into a tech solution. Come on lets build the big thing !!"]
    const tranlateValues = useRef([0,0,0,0,0,0]);
    const currentLine = useRef(0);
    let readingSpeed = useRef(0);

    useEffect(()=>{
        const scrollAction = ()=>{
            let currentScrollPostion = window.scrollY;
            currentLine.current =  currentLine.current === -1? 0 : currentLine.current;
            if(currentScrollPostion > prevScrollPosition.current){ // scroll up 
                if(currentLine.current < 6){
                    if(squareBoxs[currentLine.current].getBoundingClientRect().left >= rows[currentLine.current].getBoundingClientRect().right)
                    {
                        currentLine.current = currentLine.current + 1;
                    
                    }
                    tranlateValues.current[currentLine.current]= tranlateValues.current[currentLine.current] + readingSpeed.current;
                    setSetScrollPos((prev) => prev+1);
                }
                else if (window.scrollY < 10){
                    currentLine.current=0;
                    tranlateValues.current = [0,0,0,0,0.0];
                }
                else{
                    currentLine.current = 6;
                    console.log("end else", currentLine.current)
                }
            }
            else{
                currentLine.current =  currentLine.current === 6? 5 : currentLine.current;
                if(currentLine.current >= 0){ // scroll down
                    if(squareBoxs[currentLine.current].getBoundingClientRect().left <= rows[currentLine.current].getBoundingClientRect().left)
                    {
                        currentLine.current = currentLine.current - 1;
                    
                    }
                    tranlateValues.current[currentLine.current] = tranlateValues.current[currentLine.current] - readingSpeed.current;
                    setSetScrollPos((prev) => prev+1);
                }
                else{
                    currentLine.current = -1;
                }
            }
            prevScrollPosition.current =  currentScrollPostion;
        }

        window.addEventListener('scroll', scrollAction)
        const rows = document.getElementsByClassName("twins1");
        const squareBoxs = document.getElementsByClassName("the-square");
        Array.from(rows).forEach((element, index)=>{
            let box = squareBoxs[index]
            box.style.width = `${element.getBoundingClientRect().width}px`;
            box.style.height = `${element.getBoundingClientRect().height}px`;
        })

    return () => {
        window.removeEventListener('scroll', scrollAction);
        };

    }, [])
    return (
        <div className='container-fluid about-section'>
          {lines.map((element, index) => (
            <div className = "single-row row">
                <h1 className ="twins1">{element}</h1>
                <div className= "the-square" style={{transform: `translateX(${tranlateValues.current[index]}px`}}>
                    <h1 className ="twins2" style={{transform: `translateX(${-(tranlateValues.current[index])}px`}}>{element}</h1>
                </div>
            </div>
            ))}    
            <hr className="thick-hr"></hr>
            {readingSpeed.current = props.startReading? 30 : 0}
        </div>
    );
}

export default TrueTextColorChange;