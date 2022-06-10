import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
// import { toast } from 'react-toastify';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0swcwhp', 'template_n8w0ncc', form.current, 'zwgatt1CNyIoC1CdW')
            .then((result) => {
                console.log(result.text);
                // toast("message successfull")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='contact-meddle'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <br />
                <input type="text" name="user_name" class="input input-bordered" />
                <br />
                <label>Email</label>
                <br />
                <input type="email" name="user_email" class="input input-bordered" />
                <br />
                <label >Message</label>
                <br />
                <textarea name="message" class="input input-bordered" />
                <br />
                <input type="submit" value="Send" class="btn btn-primary" />
            </form>
        </div>
    );
};
export default Contact;