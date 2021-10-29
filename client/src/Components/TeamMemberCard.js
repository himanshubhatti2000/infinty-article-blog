import React from 'react'
function TeamMemberCard (props){
    return (<div className="team-member-card default-gradient">
        <h1>{props.name}</h1>
        <p>{props.position}</p>
    </div>)
}
export default TeamMemberCard