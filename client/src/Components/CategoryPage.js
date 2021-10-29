import VerticleArticleCard from './VerticleArticleCard'
import {categoriesData,natureData} from '../data/data'
import ArticleSectionHeading from './ArticleSectionHeading'
import CategoryCard from './CategoryCard'
import React,{Component} from 'react'
class CateogoryPage extends Component{
    constructor(props){
        console.log("heyyy")
        super(props)
        this.state={
            categoryNo: this.findNumber(this.props.match.params.category)
        }
    }
    findNumber(name){
        for(let i=0; i<categoriesData.length;i++){
            if(categoriesData[i].name===name){
                console.log("categoryno",i)
                this.categoryNumber=i
                return i
            }
        }
    }
    categoryDetail(){
        //let no=this.findNumber(this.props.match.params.category)
        //this.setState({categoryNo: no})
        console.log("cd",this.state.categoryNo)
        //this.findNumber(this.props.match.params.category)
        return(
            <div className="category-detail" style={{backgroundColor: categoriesData[0].color}}>
                <div className="content">
                    <h1>{categoriesData[this.state.categoryNo].name}</h1>
                    <h2>{categoriesData[this.state.categoryNo].desc} </h2>
                    <p>{categoriesData[this.state.categoryNo].desc}</p>
                </div>
                <div className="image">
                </div>
            </div>
        )
    }
    articlesAndad(){
        const articleCardJSX=natureData.map(article=>{
            return <VerticleArticleCard key={article.id} headline={article.headline} text={article.text} date={article.date} author={article.author}/>
        }
        )
        return(
            <div className="articles-and-ad">
                <div className="articles">{articleCardJSX}</div>
                <div className="ad"></div>
            </div>
        )
    }
    otherCategories(){
        const categoriesCardJSX=categoriesData.map(category=>{
            return <CategoryCard key={category.id}
            title={category.name} 
            desc={category.desc} 
            color={category.color} 
            totalArticles={category.totalArticles}/>
        })
        return(
            <div className="other-categories">
                <ArticleSectionHeading heading="Other Categories" 
                    color={categoriesData[0].color}  />
                <div className="categories-recommendation">
                    {categoriesCardJSX}
                </div>
            </div>
        )
    }

   componentDidUpdate(){
    if(this.findNumber(this.props.match.params.category)!==this.state.categoryNo){
        this.setState({ categoryNo: this.findNumber(this.props.match.params.category) });
    }
    window.scrollTo(0, 0)
   }
    render(){
        console.log("hahaha")
        return(
            <div className="category-page" key={this.findNumber(this.props.match.params.category)}>
                {this.categoryDetail()}
                {this.articlesAndad()}
                {this.otherCategories()}
            </div>
        )
    }
}
export default CateogoryPage