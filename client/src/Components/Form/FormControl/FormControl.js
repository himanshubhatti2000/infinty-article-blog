import React from 'react'
import Input from '../elements/Input'
import TextArea from '../elements/TextArea'
import Select from '../elements/Select'
import CheckBox from '../elements/CheckBox'
import Password from '../elements/Password'
export default function FormControl(props) {
   
    const {control,...rest}=props
    switch(control){
        case 'input' :
            return <Input {...rest }/>
        case  'textarea':
            return <TextArea {...rest}/>
        case  'select':
            return <Select {...rest}/>
        case  'checkbox':
            return <CheckBox {...rest} />
        case 'password':
            return <Password {...rest}/>
        default:
            return null
    }
}
