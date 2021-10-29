import React, { Component } from 'react'

export default class Article extends Component {
    category(){
        return  <h2><span style={{backgroundColor: this.props.categoryColor}}>{this.props.category}</span></h2>
    }
    render() {
        return (
            <div className={this.props.styleClass +" article"} >
            <div className="image" style={{
              backgroundImage: `url(${this.props.image})`,
              backgroundSize: "cover"}}>
                {this.props.styleClass==="horizontal"?<i className="far fa-bookmark"></i>:null}
            </div>
            <div className="content-cover">
            <div className="content">
                {this.props.styleClass==="verticle" && this.props.category?this.category():null}
              <h1 className="article-headline">{this.props.headline}</h1>
              <p>{this.props.text}</p>
              <div className="detail-and-actions">
                <div className="detail"> <time>{this.props.date}</time> <span style={{display: 'inline-block'}}>| {this.props.author}</span></div>
                <div className="actions">
                <i className="fas fa-share-alt"></i>
                <i className="far fa-bookmark"></i>
                </div>
              </div>
            </div>
            </div>
          </div>
        )
    }
}
