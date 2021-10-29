import React from 'react'
import {ErrorMessage, Field} from 'formik'
import TextError from './TextError'

export default function CheckBox(props) {
    const { options, name } = props
    return (
        <>
        {options.map(option => {return <label key={option.value} className="checkbox">
                <Field type="checkbox" name={name} value={option.value} />
                {option.key}
            </label>})}
            <ErrorMessage name={name} component={TextError} />
        </>
    )
}
