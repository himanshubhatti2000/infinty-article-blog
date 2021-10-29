import React, { Component } from 'react';
import Admin from './Admin';
import HomeCard from './HomeCard';
class DashboardHome extends Component {
    DataCard=()=>{
        return <section>
            <div className="data-cards"> 
           <HomeCard number="40" label="Total Views"/>
           <HomeCard number="100" label="Total Articles"/>
           <HomeCard number="40" label="Total Comments"/>
        </div>
        </section> 
    }
    render() {
        return (
            <div>
                <Admin dashboardComponent={this.DataCard()}/>
            </div>
        );
    }
}

export default DashboardHome;
