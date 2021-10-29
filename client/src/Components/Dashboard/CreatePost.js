import React, { Component } from 'react';
import Editor from './Editor' 
import Admin from './Admin';
import storeContext from '../../Context/storeContext';
class CreatePost extends Component {
    constructor(props){
        super(props)
        this.headline=React.createRef()
        this.description=React.createRef()
    }
    static contextType=storeContext
    componentDidMount=()=>{
        if(this.context.store.dashboard.createArticle.headline.length!==0){
            this.headline.current.value=this.context.store.dashboard.createArticle.headline
        }
        if(this.context.store.dashboard.createArticle.description.length!==0){
            this.description.current.value=this.context.store.dashboard.createArticle.description
        }
    }
    descriptionChange= async ()=>{
        console.log("hi",this.context.store)
        await this.context.setStore(prevStore=>({
            dashboard: {
                ...prevStore.dashboard,
                createArticle: {
                    ...prevStore.dashboard.createArticle,
                    description: this.description.current.value
                }
            }
        }))
        console.log(this.context.store)
    }
    headlineChange=async ()=>{
        console.log("hi",this.context.store)
        await this.context.setStore(prevStore=>({
            dashboard: {
                ...prevStore.dashboard,
                createArticle: {
                    ...prevStore.dashboard.createArticle,
                    headline: this.headline.current.value
                }
            }
        }))
        console.log(this.context.store)
    }
    postArticle=()=>{
        alert(JSON.stringify({headline: this.context.store.dashboard.createArticle.headline,
        description: this.context.store.dashboard.createArticle.description,
        articleContent: this.context.store.dashboard.createArticle.articleContent
    }))
    }
   createPostComponent=()=>{
        return <section >
            <div className="create-post">
            <div className="article-main">
        <button onClick={this.postArticle}>post the article</button>
        <textarea onChange={this.headlineChange} ref={this.headline} placeholder="Headline"/>
        <textarea onChange={this.descriptionChange} ref={this.description} placeholder="Description"/>
        </div>
       <Editor />
            </div>
       
</section>
    }
   render(){ 
       return (
        <Admin
       dashboardComponent={this.createPostComponent()} />
    )}
}

export default CreatePost;
