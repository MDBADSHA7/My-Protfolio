import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { toast, ToastContainer } from 'react-toastify';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_0swcwhp', 'template_n8w0ncc', form.current, 'zwgatt1CNyIoC1CdW')
            .then((result) => {
                console.log(result.text);
                toast.success('Message send successfull');
            }, (error) => {
                console.log(error.text);
                toast.error('Message is not sent')
            });
    };
    return (
        <div>
            <h1 className='contact'>Contact Me</h1>
            <p className='contact-form'>Please give your information by fill in the form is given below:</p>
            <div className='contact-meddle'>
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <br />
                        <input type="text" name="user_name" class="input input-bordered" required />
                        <br />
                        <label>Email</label>
                        <br />
                        <input type="email" name="user_email" class="input input-bordered" required />
                        <br />
                        <label >Message</label>
                        <br />
                        <textarea name="message" class="input input-bordered" required />
                        <br />
                        <input type="submit" value="Send" class="btn btn-primary" />
                        <ToastContainer></ToastContainer>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Contact;