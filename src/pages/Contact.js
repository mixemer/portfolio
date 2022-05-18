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
                            <a className='lead' href='mailto:ewadkins@mit.edu'> ewadkins@mit.edu </a>
                            ||
                            <a className='lead' href='mailto:info@ericwadkins.com'> ewadkins83@gmail.com </a>
                        </h5>
                        <h5 className='contact-info'>
                            Phone:
                            <a className='lead' href='tel:6178395035'>617-839-5035</a>
                        </h5>

                        <br></br>

                        <h5 className='contact-info text-light'>
                            ...or use the following form
                        </h5>
                    </div>
                </div>

                {/* <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <form id='contactForm' name='sentMessage' novalidate="">
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <input id='name' className='form-control' placeholder='Your Name *' required=""
                                        data-validation-required-message="Please enter your name."></input>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> */}
            </div>
        </section>
    );
}