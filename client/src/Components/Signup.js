import React from 'react'
import FormPage from './FormPage'
import SignUpForm from './Form/SignUpForm'
export default function Signup() {
    return (
        <div>
            <FormPage title={"Sign Up"} form={SignUpForm} />
        </div>
    )
}
