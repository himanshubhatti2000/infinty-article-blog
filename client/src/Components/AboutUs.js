import React, { Component } from 'react'
import TeamMemberCard from './TeamMemberCard'
import {teamMembersData} from '../data/data'
import storeContext from '../Context/storeContext'
import PersonCard from './PersonCard'
class AboutUs extends Component{
    static contextType=storeContext
    teamMembers(){
        const teamMembersJSX=teamMembersData.map(member=>{
            return <PersonCard name="Himanshu Bhatti"/> /*<TeamMemberCard key={member.id} name={member.name} position={member.position} />*/
        })
        return teamMembersJSX
    }
    componentDidMount(){
        console.log("about us",this.context)
    }
    render(){
        return(
            <div className="about-us">
                <div className="content">
                    <div className="main">
                        <h1>ABOUT US</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales sodales ex, non convallis tellus scelerisque at. Cras vitae luctus tortor, ut iaculis nisi. Etiam eu consectetur tortor, in ultrices mauris. Praesent at tincidunt odio. Vestibulum sed maximus mauris, id aliquam velit. In hac habitasse platea dictumst. Pellentesque eleifend scelerisque ex, vitae tincidunt tortor vehicula nec. 
 </p>
                    </div>
                    <div className="points">
                        <div className="point">
                            <h2>Lorem Ipsum</h2>
                            <p>Curabitur tempus vulputate arcu, sed facilisis mi semper vitae. Donec ornare mauris nisi, in tristique risus feugiat commodo. Quisque a egestas turpis. Morbi faucibus consectetur aliquet. Sed et urna sed velit eleifend eleifend. Aliquam tempus ac metus eu consectetur. Fusce ornare enim in mollis ultricies. </p>
                        </div>
                        <div className="point">
                            <h2>Lorem Ipsum</h2>
                            <p>Curabitur tempus vulputate arcu, sed facilisis mi semper vitae. Donec ornare mauris nisi, in tristique risus feugiat commodo. Quisque a egestas turpis. Morbi faucibus consectetur aliquet. Sed et urna sed velit eleifend eleifend. Aliquam tempus ac metus eu consectetur. Fusce ornare enim in mollis ultricies. </p>
                        </div>
                        <div className="point">
                            <h2>Lorem Ipsum</h2>
                            <p>Curabitur tempus vulputate arcu, sed facilisis mi semper vitae. Donec ornare mauris nisi, in tristique risus feugiat commodo. Quisque a egestas turpis. Morbi faucibus consectetur aliquet. Sed et urna sed velit eleifend eleifend. Aliquam tempus ac metus eu consectetur. Fusce ornare enim in mollis ultricies. </p>
                        </div>
                    </div>
                </div>
                <div className="team-members-section">
                    <h1>Team Members</h1>
                    <div className="authors">
                    {this.teamMembers()}
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutUs