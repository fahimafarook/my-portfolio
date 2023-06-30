import React, { useEffect , useState, useRef} from 'react';
import '../../assets/css/helper.css';

function BouncyButton(props) {

    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })
    const buttonMouseHovered = useRef(false);
    const buttonElement = useRef(null);
    const buttonCenter = useRef({x:0, y:0});

    useEffect(()=>{
        buttonElement.current = document.getElementsByClassName(props.className)[0];
        let rect = buttonElement.current.getBoundingClientRect();
        buttonCenter.current.x = (rect.width/2) + rect.left;
        buttonCenter.current.y = (rect.height/2) + rect.top;

    }, [])
    const handleMouseMove =(event)=>{
        if(buttonMouseHovered.current){
            const { clientX, clientY } = event;
            setButtonPosition({x : (clientX - buttonCenter.current.x)*0.2, y : (clientY - buttonCenter.current.y)*0.2}) 
        }
    }

    const bounceTheButton = ()=>{
    }

    const handleMouseEnter = ()=>{
        buttonMouseHovered.current = true;
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

      async function moveButton(xvalue, yvalue, getTowardsCenter, getAwayFromCenter) {
        let i = 20; // parts to come to center
        let xFactor = xvalue / 20.0;
        let yFactor = yvalue / 20.0;
        
        if (getAwayFromCenter) {
            xFactor = xFactor * -1;
            yFactor = yFactor * -1;
        } else if (getTowardsCenter) {
        }
        for (let j = 0; j < i; j++) {
          await delay(10);
          setButtonPosition((prevValue) => {
            return { x: prevValue.x - xFactor, y: prevValue.y - yFactor };
          });
        }
      }
      
      async function handleMouseLeave(){
        buttonMouseHovered.current = false;
        let EdgeValues = {x: buttonPosition.x, y: buttonPosition.y}
        await moveButton(EdgeValues.x, EdgeValues.y, true, false);
        await moveButton((EdgeValues.x/4)*-1, (EdgeValues.y/4)*-1, false, true);
        await moveButton((EdgeValues.x/4)*-1, (EdgeValues.y/4)*-1, true, false);
        await moveButton(EdgeValues.x/4, EdgeValues.y/4, false, true);
        await moveButton(EdgeValues.x/4, EdgeValues.y/4, true, false);
    }
    
    return (
        <div>
            <button className = {props.className} onClick ={props.onClick} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                <div className = "innerButton" style={{transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px) rotate(0.001deg)`}}>{props.buttonName}</div>
            </button>   
        </div>
    );
}

export default BouncyButton;







