import React from 'react';
import '../../assets/css/helper.css'

function BgColorButton(props) {
    return (
        <div>
            <button className ="shading-button" >
                <div className = "effect1"></div>
                <div className = "button-name">{props.buttonName}</div>
            </button>
        </div>
    );
}

export default BgColorButton;