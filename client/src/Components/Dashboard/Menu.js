import React from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <menu>
            <div className="dashboard-user">
                <div  className="profile-pic"/>
                <h1>Himanshu Bhatti</h1>
                <p>admin</p>
            </div>
            <ul>
                <Link to="/admin/create-post"><li>Create Article</li></Link>
                <Link to="/admin/authors"><li>Authors</li></Link>
                <li>Logout</li>
            </ul>
        </menu>
    );
}

export default Menu;
