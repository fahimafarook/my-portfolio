import React from 'react';
import TechStacks from './TechStacks';
import BgColorButton from '../helper/BgColorButton'

function WorkPageSection(props) {
    return (
        <div className='tech-stack-section'>
             <TechStacks/>
            <BgColorButton/>
            <TechStacks/>
        </div>
    );
}

export default WorkPageSection;