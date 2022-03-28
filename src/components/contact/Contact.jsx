import React, {useRef} from "react";
import './contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {BsWhatsapp} from "react-icons/bs";
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef()
    const send = (e) => {
        e.preventDefault();
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID').then(() => e.target.reset())
    }

    return (
        <section id={'contact'}>
            <h5>
                Get In Touch
            </h5>
            <h2>
                Contact Me
            </h2>
            <div className={'container contact__container'}>
                <div className={'contact__options'}>
                    <article className={'contact__option'}>
                        <MdOutlineEmail className={'contact__option_-icon'}/>
                        <h4>Email</h4>
                        <h5>dummy@gmail.com</h5>
                        <a href={'mailto:dummy@gmail.com'} target={'_blank'}>Send a message</a>
                    </article>

                    <article className={'contact__option'}>
                        <RiMessengerLine className={'contact__option_-icon'}/>
                        <h4>Messenger</h4>
                        <h5>facebook</h5>
                        <a href={'https://m.me/facebook.profile'} target={'_blank'}>Send a message</a>
                    </article>

                    <article className={'contact__option'}>
                        <BsWhatsapp className={'contact__option_-icon'}/>
                        <h4>WhatsApp</h4>
                        <h5>+071234567894</h5>
                        <a href={'https://api.whatsapp.com/send?phone=+071234567894'} target={'_blank'}>Send a message</a>
                    </article>

                </div>
                <form ref={form} onSubmit={send}>
                    <input type={'text'} name={'name'} placeholder={'Your Full Name'} required/>
                    <input type={'email'} name={'email'} placeholder={'Your Email'} required/>
                    <textarea name={'message'} id={'message'} placeholder={'Your Message'} cols={30} rows={10} required/>
                    <button type={'submit'} className={'btn btn-primary'}>Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact
