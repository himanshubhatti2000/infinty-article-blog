import React, { Component } from 'react';
import Menu from './Menu'
import '../../style/dashboard.css'
class Admin extends Component {
    componentDidMount(){
        this.header=document.getElementById("header")
        this.footer=document.getElementById("footer")
        this.header.style.display="none"
        this.footer.style.display="none"
    }
    componentWillUnmount(){
        this.header.style.display="block"
        this.footer.style.display="block"
    }
    render() {
        console.log(this.props)
        return (
            <div className="dashboard">
                <Menu/>
                {this.props.dashboardComponent}
                
            </div>
        );
    }
}

export default Admin;
