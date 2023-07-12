import React from 'react';
import '../../assets/css/helper.css';

function HeaderIcon(props) {
    return (

        <div onClick={props.onClick}>
            <div className='header-icon'>
                <div className='stoke-bar1'></div>
                <div className='stoke-bar2'></div>
            </div>
        </div>
    );
}

export default HeaderIcon;