import React, {Component} from 'react'
import {Formik, Form} from 'formik'
import FormControl from './FormControl/FormControl'
import {Link} from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios'

export default class LoginForm extends Component {
    postData=async data=>{
         let res=await axios.post('/api/login',data)
        console.log(res)
    }

    onSubmit=(data)=>{
        console.log(data)
        alert(JSON.stringify(data))
        this.postData(data)
    }
    initialValues={
        email: '',
        password: ''
    }
    validationSchema=Yup.object({
        email: Yup.string().email("invalid email").required("required"),
        password: Yup.string().required("required")
    })
    render() {
        return(
            <div className="formik loginform">
              <Formik initialValues={this.initialValues}
               validationSchema={this.validationSchema}
               onSubmit={this.onSubmit}>
                   
                  <Form>
                  <FormControl
                control="input" 
                label={"Email"}
                name={"email"}
                />
                <FormControl
                control="password" 
                label={"Password"}
                name={"password"}
                />
                <button type="submit">Submit</button>
                  </Form>
              </Formik>
              <button className="google-button" onClick={()=>{console.log("hey")
            
            }}><div className="google-icon"></div><div>Login with Google</div></button>
              <Link to="/signup"><button className="already-have-account">Don't have an account</button></Link>
            </div>
        )
    }
}
