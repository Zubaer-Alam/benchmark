import React from 'react'
import ContactForm from './ContactForm'
import Globe from './Globe'
import PageTransition from '../../components/PageTransition'


const ContactPage = () => {
    return (
        // <PageTransition>
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center mx-auto  py-20'>
                <ContactForm />
                <Globe />
            </div>
        // </PageTransition>
    )
}

export default ContactPage