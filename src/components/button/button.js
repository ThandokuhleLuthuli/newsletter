import React from 'react';

export default function Button({size,modifier,handleClick,type,name}) {
    return(<>
        <button className={`button button--${size} button--${modifier}`} onClick={handleClick} type={type}>{name}</button>
    
    </>)
}