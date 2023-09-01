import React from 'react';


export default function Image({media1,media2,src,alt}) {
     return (
        <>
        <picture>
            <source media='(min-width:768px)' srcSet={media1}/>
            <source media='(min-width:300px)' srcSet={media2}/>
            <img src={src} alt={alt}/>
        </picture>
        </>
     )
}