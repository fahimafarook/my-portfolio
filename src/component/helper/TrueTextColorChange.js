import React, { useState, useEffect, useRef, useContext } from 'react';
import '../../assets/css/helper.css'
import { DeviceContext } from '../../App';

function TrueTextColorChange(props) {

    const deviceName = useContext(DeviceContext);
    const [scrollPos, setSetScrollPos] = useState(0);
    const prevScrollPosition = useRef(0);
    // const lines = ["__","Im fahima, two plus years of experience",
    //  "as software engineer. I can help u in building ur",
    //   "cool dynamic website, And how we do it ?? we",
    //   "can design ur website, put in ur requirments and needs,",
    //   "into a tech solution. Come on lets build the big thing !!"]

    const laptop_lines = ["__",
        "Hi, it's Fahima and Arun!", 
        "we can help you in creating dynamic and",
        "impressive websites tailored to your unique needs.", 
        "We can transform your ideas and requirements into", 
        "a powerful tech solution. From designing your website",
        "to implementing your vision, we got you covered!!"]

    const mobile_lines = ["__",
        "Hi, it's Fahima and Arun!", 
        "we can help you in",
        "creating dynamic and",
        "impressive websites",
        "tailored to your unique needs.", 
        "We can transform your",
        "ideas and requirements into", 
        "a powerful tech solution.",
        "From designing your website",
        "to implementing your vision,",
        "we got you covered!!"]

    const lines = window.innerWidth <= 768 ? mobile_lines : laptop_lines;
    
    // const tranlateValues = useRef([0,0,0,0,0,0]);
    const tranlateValues = useRef(new Array(lines.length).fill(0));

    const currentLine = useRef(0);
    let readingSpeed = useRef(0);
    const sectionRed = useRef(false);

    useEffect(()=>{
        if(window.innerWidth < 768)
        {
        readingSpeed.current = props.startReading? 40 : 0;
        }
        else{
            readingSpeed.current = props.startReading? 70 : 0;
        }
        let data = {
            scrollDown: false,
            scrollUp: false,
          };
        const scrollAction = ()=>{
            if(lastSquare.getBoundingClientRect().left >= (lastTwin1.getBoundingClientRect().right))
            {
                data.scrollDown = true;
                props.onChildValue(data);
            }
            else if(firstSquare.getBoundingClientRect().left >= (firstTwin1.getBoundingClientRect().right)){
                data.scrollup = true;
                props.onChildValue(data);
            }
            let currentScrollPostion = window.scrollY;
            currentLine.current =  currentLine.current === -1? 0 : currentLine.current;
            if(currentScrollPostion > prevScrollPosition.current){ // scroll up 
                if(currentLine.current < lines.length){
                    if(squareBoxs[currentLine.current].getBoundingClientRect().left >= rows[currentLine.current].getBoundingClientRect().right){
                        currentLine.current = currentLine.current + 1;
                    }
                    console.log("readingSpeed.current", readingSpeed.current);
                    tranlateValues.current[currentLine.current]= tranlateValues.current[currentLine.current] + readingSpeed.current;
                    setSetScrollPos((prev) => prev+1);
                }
                else if (window.scrollY < 10){
                    currentLine.current=0;
                    // tranlateValues.current = [0,0,0,0,0.0];
                    tranlateValues.current = new Array(lines.length).fill(0);
                }
                else{
                    currentLine.current = lines.length
                    // currentLine.current = 6;
                }
            }
            else{
                // currentLine.current =  currentLine.current === 6 ? 5 : currentLine.current;
                currentLine.current =  currentLine.current === lines.length ? lines.length-1 : currentLine.current;
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

        // const timeout = setTimeout(simulateEvent, 2000);

        const squareElements = document.getElementsByClassName("the-square");
        const lastSquare = squareElements[squareElements.length-1];
        const firstSquare = squareElements[0];

        const lastTwin1 = document.getElementsByClassName("twins1")[squareElements.length-1];
        const firstTwin1 = document.getElementsByClassName("twins1")[0];

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
        // clearTimeout(timeout);
        };

    }, [])

    useEffect(()=>{
        if(window.innerWidth < 768)
        {
        readingSpeed.current = props.startReading? 40 : 0;
        }
        else{
            readingSpeed.current = props.startReading? 85 : 0;
        }
    },[props])

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
        </div>
    );
}

export default TrueTextColorChange;