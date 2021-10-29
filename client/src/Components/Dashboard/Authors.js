import React, { Component } from 'react';
import PersonCard from '../PersonCard';
import Admin from './Admin';
class CreatePost extends Component {
    author=()=>{
        const authorData=[{name: "Vishal",TotalArticles: 10},{name: "Himanshu Bhatti",TotalArticles: 10},{name: "Vishal",TotalArticles: 10},{name: "Vishal",TotalArticles: 10}]
        const authorJSX= authorData.map((author,i)=><PersonCard key={i} name={author.name} totalArticles={author.TotalArticles} />
        )
        console.log(authorJSX)
        return authorJSX
    }
   AuthorsComponent=()=>{
        return <section className="authors">
       {this.author()}    
</section>
    }
   render(){ 
       this.author()
       return (
        <Admin
       dashboardComponent={this.AuthorsComponent()} />
    )}
}

export default CreatePost;
