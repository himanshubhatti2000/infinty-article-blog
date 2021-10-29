import React from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'
export default function TextArea(props) {
    console.log("textarea")
    const {label,name,...rest}=props
    return (
        <div className="form-element">
            <Field as="textarea" id={name} name={name} placeholder={label} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>            
        </div>
    )
}
