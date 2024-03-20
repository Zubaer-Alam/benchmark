import React from 'react'
import ContactForm from './ContactForm'
import Globe from './Globe'
import PageTransition from '../../components/PageTransition'


const ContactPage = () => {
    return (
        // <PageTransition>
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-8 max-w-7xl mx-auto  py-20 md:px-20'>
                <ContactForm />
                <Globe />
            </div>
        // </PageTransition>
    )
}

export default ContactPage