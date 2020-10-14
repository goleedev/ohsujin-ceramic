import React from 'react'
import ContactEmail from 'components/ContactEmail';
import ContactUsCards from 'components/ContactUsCards';

const Contact = ({ userObj }) => {
    return (
        <form>
            <ContactEmail />
            <ContactUsCards />
        </form>
    )
}

export default Contact;
