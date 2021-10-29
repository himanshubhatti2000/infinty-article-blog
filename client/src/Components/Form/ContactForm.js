import React, { Component } from 'react'
import {Formik,Form} from 'formik'
import FormControl from './FormControl/FormControl'
import * as Yup from 'yup'
import 'yup-phone'
import storeContext from '../../Context/storeContext'
class ContactForm extends Component {
    state={
        name: {
            firstName: "",
            lastName: ""
          },
          phoneNumber: "",
          email:"",
          message: ""
    }
    static contextType=storeContext
   
    componentWillUnmount=()=>{
        console.log(this.data)
        //this.context.setStore({contactUs: this.data})
    }
    onSubmit=(data)=>{
        console.log(data)
        alert(JSON.stringify(data))
        this.data=data
    }
    initialValues={
        name: {firstName: '', lastName: ''},
        email: '',
        phone: '',
        message: ''
    }
    //initialValues=this.context.store.contactUs

    validationSchema=Yup.object({
        name: Yup.object({firstName: Yup.string().required('required'), lastName: Yup.string().required('required')}),
        email: Yup.string().email("invalid email").required("required"),
        phone: Yup.string().required().phone(),
        message: Yup.string().required()
    })
    onChange=()=>{
        console.log("onchange")
    }
    render(){
        return <div className="formik"><Formik initialValues={this.initialValues}
        validationSchema={this.validationSchema}
           onSubmit={this.onSubmit}
           onKeyUp={this.onChange}>
                   {
                       formik=>{
                           return <Form >  
                           <div className="flex">
                               <FormControl 
                               control="input"
                               label="First Name"
                               name="name.firstName"/>
                               <FormControl 
                               control="input"
                               label="Last Name"
                               name="name.lastName"/>
                           </div>
                           <div className="flex">
                           <FormControl
                           label="Phone Number" 
                           control="input"
                           type="phone"
                           name="phone"
                           />
                           <FormControl 
                           label="Email"
                           control="input"
                           name="email"
                           type="email"/>

                           </div>
                           <FormControl
                           label="message"
                           control="textarea"
                           name="message"   />
                           <button type="submit">Submit</button>
                           </Form>
                       }
                   }
           </Formik>
           </div>
    }
    
}
export default ContactForm
