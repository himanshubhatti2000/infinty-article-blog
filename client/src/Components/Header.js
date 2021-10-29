import React, {Component} from 'react'
import logo from '../img/logo.png'
import {NavLink} from 'react-router-dom'
class Header extends Component{
    mainHeader(){
        return(
            <div className="main-header-cover"> 
                <div className="main-header">
                    <div className="search">
                    <i className="fas fa-search"></i>
                    <div className="search-box">
                    <input placeholder="Lorem Ipsum" />
                    </div> 
                    </div>
                    <div className="logo-header">
                       <NavLink to="/">
                        <img src={logo} alt="logo"/>
                        </NavLink>
                    </div>
                    <div className="subscribe-button">
                    <i className="far fa-bell"></i>
                    </div>
                </div>
            </div>
        )
    }
    subHeader(){
        return(
            <div className="sub-header-cover">
                <div className="sub-header">
                    <nav>
                   <NavLink to="/categories" className="nav-link" activeClassName="nav-link-active">Categories</NavLink>
                   <NavLink to="/contact-us" className="nav-link" activeClassName="nav-link-active">Contact us</NavLink>
                   <NavLink to="/about-us" className="nav-link" activeClassName="nav-link-active">About us</NavLink>
                   <NavLink to="/login" className="nav-link" activeClassName="nav-link-active">Login</NavLink>
                    </nav>
                </div>
            </div>
        )
    }
    render(){
        return(
            <header  id="header">
                {this.mainHeader()}
                {this.subHeader()}
            </header>
        )
    }
}
export default Header