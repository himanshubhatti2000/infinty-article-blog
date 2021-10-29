import React from 'react'
function Footer(){
    return(
        <footer id="footer">
            <div className="main">
                <div className="logo"></div>
                <div className="options">
                    <a href="ab">Terms</a>
                    <a href="ab">Policy</a>
                    <a href="ab">Contact us</a>
                </div>
                <div className="social-media">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
                <i className="fa fa-twitter" aria-hidden="true"></i>
                <i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
            </div>
            <div className="sub">
                <p>Infinity  © 2021 ,All rights reserved</p>
            </div>
        </footer> 
    )
}
export default Footer