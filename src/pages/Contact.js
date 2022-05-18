import React, {useRef, useEffect} from 'react';
import useOnScreen from '../useOnScreen';
import { headerIds } from "../globals";

import "./Contact.css";

export default function Contact({ setActive }) {
    const ref = useRef()
    const isVisible = useOnScreen(ref)


    useEffect(() => {
        if (isVisible) {
            setActive("projects")
        }
      }, [isVisible])

    return (
        <section ref={ref} className="content-section contact text-white" id={headerIds.contact}>
            <div className="container">
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <h2 className='section-heading'> Contact Me </h2>
                        <h5 className='contact-info'>
                            Email: 
                            <a className='lead' href='mailto:mehmetmshin@gmail.com'> mehmetmshin@gmail.com </a>
                            {/* ||
                            <a className='lead' href=''>  </a> */}
                        </h5>
                        {/* <h5 className='contact-info'>
                            Phone:
                            <a className='lead' href='tel:'></a>
                        </h5> */}

                        <br></br>

                        <h5 className='contact-info text-light'>
                            ...or use the following form
                        </h5>
                    </div>
                </div>

                <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <form id='contactForm' name='sentMessage' novalidate="">
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <input id='name' className='form-control' placeholder='Your Name *' type="text" required=""
                                        data-validation-required-message="Please enter your name." aria-invalid="false"></input>
                                        <p className='help-block text-danger'></p>
                                    </div>

                                    <div className='form-group'>
                                        <input id='email' className='form-control' placeholder='Your Email *' type="email" required=""
                                        data-validation-required-message="Please enter your email address." aria-invalid="false"></input>
                                        <p className='help-block text-danger'></p>
                                    </div>

                                    <div className='form-group'>
                                        <input id='phone' className='form-control' placeholder='Your Phone' type="tel" required=""
                                        aria-invalid="false"></input>
                                        <p className='help-block text-danger'></p>
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <textarea id="message" className='form-control' placeholder='Your Message *'
                                        required="" data-validation-required-message="Please enter a message." aria-invalid="false" style={{height: "275px"}}></textarea>
                                        <p className='help-block text-danger'></p>
                                    </div>
                                </div>

                                <div className='clearfix'></div>

                                <div className='col-lg-12 text-center'>
                                    <div id='success'></div>
                                    <button className='btn btn-lg btn-primary' type='submit'> Send Message </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}