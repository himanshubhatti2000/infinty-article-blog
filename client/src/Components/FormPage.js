import React, { Component } from 'react'
class FormPage extends Component{
    
    componentDidMount(){
        const footer=document.getElementById("footer")
        footer.style.marginTop=0
    }
    componentWillUnmount(){
        const footer=document.getElementById("footer")
        footer.style.marginTop="50px"
    }
    render(){
        return(
            <div className="contact-us"> 
                <h1>{this.props.title}</h1>
              <this.props.form />
            </div>
        )
    }
}
export default FormPage