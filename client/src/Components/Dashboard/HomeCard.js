import React from 'react';

const HomeCard = ({number,label}) => {
    return (
        <div className="home-card">
            <h1>{number}</h1>
            <p>{label}</p>
        </div>
    );
}

export default HomeCard;
