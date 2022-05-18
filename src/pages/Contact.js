import React, {useRef, useEffect, useState} from 'react';
import useOnScreen from '../useOnScreen';
import { headerIds } from "../globals";

import "./Contact.css";

/**
 * This contact form uses formspree.io
 * https://formspree.io/forms/xeqnvdpq/integration
 */
export default function Contact({ setActive }) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)

    useEffect(() => {
        if (isVisible) {
            setActive("projects")
        }
    }, [isVisible])

    const [form, setForm] = useState(
        {
            name: "", isNameValid: true,
            email: "", isEmailValid: true,
            phone: "", isPhoneValid: true,
            message: "", isMessageValid: true
        }
    );
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        
        let _isNameValid = true;
        let _isEmailValid = true;
        let _isMessageValid = true;

        if (form.message.length < 1) {
            _isNameValid = false;
        }

        if (form.name.length < 2) {
            _isMessageValid = false;
        }
        
        // no need to validate the email because bootsrap handles that part
        if (form.email.length < 1) {
            _isEmailValid = false
        }

        setForm({
            ...form,
            isNameValid: _isNameValid,
            isEmailValid: _isEmailValid,
            isMessageValid: _isMessageValid
        });

        if (_isNameValid && _isEmailValid && _isMessageValid) {
            fetch("https://formspree.io/f/xeqnvdpq", {
                method: "POST",
                body: new FormData(event.target),
                headers: {
                    'Accept': 'application/json'
                }
              }).then(response => {
                if (response.ok) {
                    console.log(response);
                    setIsSuccess(true);
                    setForm(
                        {
                            name: "", isNameValid: true,
                            email: "", isEmailValid: true,
                            phone: "", isPhoneValid: true,
                            message: "", isMessageValid: true
                        }
                    );
                } else {
                }
              }).catch(error => {
              });
        }
    };

    
    const onNameInputClicked = () => {
        setForm({
            ...form,
            isNameValid: true,
        });
    }

    const onEmailInputClicked = () => {
        setForm({
            ...form,
            isEmailValid: true,
        });
    }

    const onMessageInputClicked = () => {
        setForm({
            ...form,
            isMessageValid: true,
        });
    }

    return (
        <section ref={ref} className="content-section contact text-white" id={headerIds.contact}>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <h2 className='section-heading'> Contact Me </h2>
                        <h5 className='contact-info'>
                            Email: 
                            <a className='lead' href='mailto:mehmetmshin@gmail.com'> mehmetmshin@gmail.com </a>
                        </h5>
                        <br></br>
                        <h5 className='contact-info text-light opacity-50'>
                            ...or use the following form
                        </h5>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <form id='contactForm' className='needs-validation' name='sentMessage' novalidate onSubmit={onSubmit}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    {/* Name Input */}
                                    <div className='form-group'>
                                        <input id='name' name='name' className='form-control' placeholder='Your Name *' type="text" required=""
                                        aria-invalid="false" value={form.name} onChange={e => setForm({
                                            ...form,
                                            name: e.target.value.trim()
                                        })} onClick={() => onNameInputClicked()}></input>
                                        {!form.isNameValid && 
                                            <p className='help-block text-danger mt-1'> Please enter your name. </p>
                                        }
                                    </div>
                                    
                                    {/* Email Input */}
                                    <div className='form-group'>
                                        <input id='email' name='email' className='form-control' placeholder='Your Email *' type="email" required=""
                                        aria-invalid="false" value={form.email} onChange={e => setForm({
                                            ...form,
                                            email: e.target.value.trim()
                                        })} onClick={() => onEmailInputClicked()}></input>
                                        {!form.isEmailValid && 
                                            <p className='help-block text-danger mt-1'> Please enter your email. </p>
                                        }
                                    </div>
                                    
                                    {/* Phone Input */}
                                    <div className='form-group'>
                                        <input id='phone' name='phone' className='form-control' placeholder='Your Phone' type="tel" required=""
                                        aria-invalid="false" value={form.phone} onChange={e => setForm({
                                            ...form,
                                            phone: e.target.value.trim()
                                        })}></input>
                                        {!form.isPhoneValid && 
                                            <p className='help-block text-danger mt-1'> Please enter your phone. </p>
                                        }
                                    </div>
                                </div>
                                
                                {/* Message Input */}
                                <div className='col-md-6'>
                                    <div className='form-group has-validation'>
                                        <textarea id="message"  name='message' className='form-control' placeholder='Your Message *'
                                        required="" aria-invalid="false" style={{height: "275px"}} 
                                        value={form.message} onChange={e => setForm({
                                            ...form,
                                            message: e.target.value.trim()
                                        })} onClick={() => onMessageInputClicked()}></textarea>
                                        {!form.isMessageValid && 
                                            <p className='help-block text-danger mt-1'> Please enter a meesage. </p>
                                        }
                                    </div>
                                </div>

                                <div className='clearfix'></div>
                                
                                {/* Submit Button */}
                                <div className='col-lg-12 text-center'>
                                    {isSuccess && 
                                        <div id='success' className='fs-4 p-2'> Recieved your message! </div>
                                    }
                                    <button className={`btn btn-lg ${isSuccess ? 'btn-success' : 'btn-primary'}`} type='submit' disabled={isSuccess}> Send Message </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}