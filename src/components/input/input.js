import React from 'react';


export default function Input({type,id,changeHandler,value,placeholder,register, required,errors}) {

    
    return (<>
    <input className='input' 
    type={type}
    id={id} 
    onChange={changeHandler} 
    placeholder={placeholder}
    value={value} 
    {...register("emailAddress", { required,pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} aria-invalid={errors.emailAddress ? "true" : "false"}
      />
    </>)
}

