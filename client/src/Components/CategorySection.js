import React, { Component } from 'react'
import ArticleSectionHeading from './ArticleSectionHeading'
import ArticleCard from './ArticleCard'
class CategorySection extends Component{
    articleCards(){
        const ArticlesJSX=this.props.data.map(article=>{
            return <ArticleCard headline={article.title} 
            text={article.desc}
            author={article.author}
            date={article.createdAt}
            category={article.category}
            key={article.id}
             />
        })
        return ArticlesJSX
    }
    render(){
        return(
            <div className="category-section">
                  <ArticleSectionHeading heading={this.props.title} color={this.props.color}/>
            <div className="category-articles">
                {this.articleCards()}
            </div>
            </div>
        )
    }
}
export default CategorySection