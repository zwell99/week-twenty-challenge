import React, { useState } from 'react';

function ContactForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        props.onSubmit({
          id: Math.random(Math.floor() * 1000),
          name: name,
          email: email,
          message: message
        });
    
        setName('');
        setEmail('');
        setMessage('');
    };

    const nameChange = (e) => {
        setName(e.target.value);
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const messageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div>
            <form className='contact-form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder="Name"
                    value={name}
                    name="text"
                    className="name-input"
                    onChange={nameChange}
                ></input>
                <input
                    type='email'
                    placeholder="Email"
                    value={email}
                    name="text"
                    className="email-input"
                    onChange={emailChange}
                ></input>
                <input
                    type='text'
                    placeholder="Message"
                    value={message}
                    name="text"
                    className="message-input"
                    onChange={messageChange}
                ></input>
                <button className="contact-button">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;