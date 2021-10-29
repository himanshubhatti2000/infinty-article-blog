import '../style/articles.css'
import React from 'react'
import Article from './Article'
function ArticleCard(props){
    return(
    /*        <div className="article-card">
            <div className="image">
                <i className="far fa-bookmark"></i>
            </div>
            <div className="content-cover">
            <div className="content">
              <h1 className="article-headline">{props.headline}</h1>
              <p>{props.text}</p>
              <div className="detail-and-actions">
                <h1 className="detail">{props.date} | {props.author}</h1>
                <div className="actions">
                <i className="far fa-bookmark"></i>
                <i className="fas fa-share-alt"></i>
                </div>
              </div>
            </div>
          </div>
    </div>*/
          <Article styleClass="horizontal" headline={props.headline} text={props.text} date={props.date} author={props.author} />
        )
    
}

export default ArticleCard