import React ,{useContext} from 'react';
import Image from '../image/image';
import Button from '../button/button';
import iconsuccess from '../../assets/images/icon-success.svg'
import { NewsletterContext } from '../../context/context';
import {useNavigate} from 'react-router-dom'


export default function Success() {
    
    //navigation object
    const navigate = useNavigate();

    const {email,setEmail} = useContext(NewsletterContext);

    const handleClick = () => {
        navigate('/');
        window. location. reload(); 
    }
   

    return(<>
        <div className='success'>
            <div className='success-container'>
                <Image className='success-image' media1={iconsuccess} media2={iconsuccess} src={iconsuccess}/>
                <h1 className='success-heading'>Thanks for subscribing!</h1>
                <p className='success-copy'>A confirmation email has been sent to <b>{email}</b> Please open it and click the button inside to confirm your subscription.</p>
                <Button name="Dismiss message" size="xl" handleClick={handleClick}/>
            </div>
        </div>
    </>)
}