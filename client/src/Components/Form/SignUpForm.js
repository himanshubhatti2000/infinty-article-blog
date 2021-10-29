import {Formik, Form} from 'formik'
import FormControl from './FormControl/FormControl'
import * as Yup from 'yup'
import {Link} from 'react-router-dom'
import React, { Component } from 'react'
const option= [{key: 'Accept terms and conditions', value:"accepted"}]
  

export default class SignUpForm extends Component {
    initialValues={
        name: {firstName: '', lastName: ''},
        email: '',
        phone: '',
        message: '',
        password:'',
        permissions: [],
        confirmPassword: ''
    }
    validationSchema=Yup.object({
        name: Yup.object({firstName: Yup.string().required('required'), lastName: Yup.string().required('required')}),
        email: Yup.string().email("invalid email").required("required"),
        phone: Yup.string().required().phone(),
        password: Yup.string().required('required').min(6),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'),null],"Password must match").required('required'),
        permissions: Yup.array().min(1,"The terms and conditions must be accepted.").required("The terms and conditions must be accepted.")
    })
    onSubmit=(data)=>{
        console.log(data)
        alert(JSON.stringify(data))
    }
    render() {
        return (<div className="signup formik">
            <Formik initialValues={this.initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.onSubmit}>
                <Form>
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
                <div className="flex">
                <FormControl
                           label="Password" 
                           control="password"
                           name="password"
                      
                           />
                           <FormControl 
                           label="Confirm Password"
                           control="password"
                           name="confirmPassword"/>
                </div>
                <FormControl 
                control="checkbox"
                name="permissions"
                options={option}/>
                
                <button type="submit">Submit</button>
                </Form>
                
            </Formik>
            <button className="google-button"><div className="google-icon"></div><div>Signup with Google</div></button>
            <Link to="/login"><button className="already-have-account">Already Have account?</button></Link>
            </div>
        )
    }
}
