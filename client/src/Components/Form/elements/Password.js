import React,{useState} from 'react'
import {Field,ErrorMessage} from 'formik'
import TextError from './TextError'

export default function Input(props) {
    const {label,name,...rest}=props
    const [Visiblity, setVisiblity] = useState(false)
     const Icon=   <div className="password-eye" id={label} onClick={()=>setVisiblity(!Visiblity)}>
            {Visiblity===false?<i className="fas fa-eye"></i>:<i className="fas fa-eye-slash"></i>}
        </div>

    const type=Visiblity===true?'text':'password'
    return (
        <div className="form-element">
            <div className="password-field"  onClick={()=>document.getElementById(label).style.display='block'}>
            <Field id={name} name={name}  type={type} {...rest} placeholder={label}/>
            {Icon }
            </div>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}
