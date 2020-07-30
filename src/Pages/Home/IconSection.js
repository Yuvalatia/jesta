import React from 'react';
import FontAwesome from 'react-fontawesome';

import './IconSection.css';
const IconSection = (props) => {
    return(
        <div className="iconsection__container">
            <FontAwesome className='iconsection__icon' name={props.iconName}/>
            <h3 className="main_font">{props.title}</h3>
            <p className="main_font">{props.info}</p> 
        </div>
    );
}

export default IconSection;