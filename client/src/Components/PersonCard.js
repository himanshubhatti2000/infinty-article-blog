import React from 'react';
import history from '../History/History';
const PersonCard = ({name,totalArticles}) => {
    return (
        <div className="author" onClick={()=>console.log("hey")}>
            <div className="author-image">
                <div className="image">
                  <div className="social-media">
                <div className="icon fb" onClick={()=>{
                   var win = window.open("https://www.facebook.com", '_blank');
                   win.focus();
                }}>
                <i className="fab fa-facebook-f"/>
                </div>
                <div className="icon insta" onClick={()=>{
                   var win = window.open("https://www.facebook.com", '_blank');
                   win.focus();
                }} > 
                <i className="fab fa-instagram"/>
                </div>
                <div className="icon twtr" onClick={()=>{
                   var win = window.open("https://www.facebook.com", '_blank');
                   win.focus();
                }}>
                <i className="fab fa-twitter"/>
                </div>
                  </div>
                </div>
            </div>
            <div className="details">
            <h2>{name}</h2>
            <p>Position: Author</p>
            {"author"==="author"?<p>Total Articles: {totalArticles}</p>:""}
            </div>
            </div>
    );
}

export default PersonCard;
