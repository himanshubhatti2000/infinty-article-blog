import React, { Component } from 'react'
import FormPage from './FormPage'
import ContactForm from './Form/ContactForm'
class ContactUs extends Component{
    render(){
        return(
           <FormPage title={"Contact-us"} form={ContactForm} />
        )
    }
}
export default ContactUs