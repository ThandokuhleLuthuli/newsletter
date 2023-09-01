import React , {useState} from 'react';
import Input from '../input/input';
import Button from '../button/button';
import desktopimage from '../../assets/images/illustration-sign-up-desktop.svg';
import mobileimage from '../../assets/images/illustration-sign-up-mobile.svg'
import listicon from '../../assets/images/icon-list.svg'
import Image from '../image/image';
import { useContext } from 'react';
import { NewsletterContext } from '../../context/context';
import {useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';


export default function  Form() {
    //context object
    const {email,setEmail} = useContext(NewsletterContext);

    //navigation object
    const navigate = useNavigate();


    //use form 
    const {register,handleSubmit,formState: { errors }} = useForm();

    //form watching any change input field. The value of 'email' the field is caputred by setEmail.
    const handleChange = (event) => {
        setEmail(event.target.value);
    }

    //Form submission
     const formSubmit = (data) => {
        let mail = JSON.stringify(data.emailAddress).trim();
        //push the value to the context
        setEmail(mail);
        console.log(mail);
        navigate('/success');
     }
     
     const formList = [
            {image: <Image media1={listicon} media2={listicon} src={listicon}/>,copy:"Product discovery and building what matters"},
            {image: <Image media1={listicon} media2={listicon} src={listicon}/>,copy:"Measuring to ensure updates are a success"},
            {image: <Image media1={listicon} media2={listicon} src={listicon}/>,copy:"And much more!"}
    ]


    return (<>
        <div className='form-wrapper'>
            <div className='form-container'>
                <div className=' form-column form-column--left'>
                    <h1 className='form-heading'>Stay updated!</h1>
                    <p className='form-copy'> Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul className='form-list'>

                        {
                            formList.map(formList => (
                                <li className='form-list-item' key={formList.copy}>{formList.image}{formList.copy}</li>
                            ))
                        }
                       
                    </ul>
                    <form className='form' onSubmit={handleSubmit(formSubmit)}>
                        <label className='form-label'>
                            Email address <span> {errors.emailAddress?.type === 'required' && <p className='form-error' role="alert">email is required</p>} {errors.emailAddress?.type === 'pattern' && <p className='form-error' role="alert">email format is incorrect</p>}</span>
                            <Input changeHandler={handleChange} register={register} required placeholder="Johndoe@example.com" type="text" errors={errors}/>
                        </label>
                        <Button name="Subscribe to monthly newsletter" size="xl" type='submit'/>
                    </form>
                </div>
                <div className='form-column form-column--right'>
                    <Image media1={desktopimage} media2={mobileimage} src={desktopimage} alt="hero"/>
                </div>
            </div>
        </div>
            
        </>);
}