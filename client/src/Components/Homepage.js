import React, { Component } from "react";
import ArticleSectionHeading from './ArticleSectionHeading'
import VerticleArticleCard from './VerticleArticleCard'
import CategorySection from './CategorySection'
import {trendingData} from '../data/data'
import {categoriesData} from '../data/data'
import axios from 'axios'
import storeContext from '../Context/storeContext'
class Homepage extends Component {
  static contextType=storeContext
  constructor(){
    super();
    
    this.state = {
      articles: []
    }
  }
  fetchData=async ()=>{
    console.log("ia m working")
    const res=await axios.get('/api')
    console.log("data is "+ res.data)
    this.context.setStore({homepage:res.data})
  }
  componentDidMount(){/*
    fetch("/" )
    .then(res => res.json())
    .then(articles => this.setState({articles} , ()=>  console.log("fetched articles are : ",articles)));*/
    this.fetchData()
  }
  slider(){
    return(
      <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item first-img  active" data-interval="3000">
        <div className="content   ">
      

                <div className="category ">
                  <h1> <span>Lorem Ipsum</span></h1>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sed eleifend dolor. Vestibulum sed eleifend dolor.{" "}
                </p>
                <h2>April 19, 2021 | Vishal Sharma</h2>
              </div>
              
      </div>
      <div className="carousel-item second-img default-gradient " data-interval="2000">
      <div className="content   ">
       
                <div className="category">
                  <h1> <span>Lorem Ipsum</span></h1>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sed eleifend dolor. Vestibulum sed eleifend dolor.{" "}
                </p>
                <h2>April 19, 2021 | Vishal Sharma</h2>
              </div>
         
      </div>
      <div className="carousel-item third-img default-gradient" data-interval="1000">
      <div className="content   ">
    
                <div className="category">
                  <h1> <span>Lorem Ipsum</span></h1>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sed eleifend dolor. Vestibulum sed eleifend dolor.{" "}
                </p>
                <h2>April 19, 2021 | Vishal Sharma</h2>
              </div>
              
      </div>
    </div>
  </div>
  </>
  )
  }
  herobox() {
    return (
      <div className="herobox-cover">
        <div className="herobox-background">
          <div className="herobox">
            <div className="hero-slide ">
            {this.slider()}
            </div>
            <div className="second-box">
              <div className="second-first-box default-gradient">
                <div className="content">
                  <div className="category">
                    <h1> <span>Lorem Ipsum</span></h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sed eleifend dolor. Vestibulum sed eleifend dolor.{" "}
                  </p>
                  <h2>April 19, 2021 | Vishal Sharma</h2>
                </div>
              </div>
              <div className="second-second-box">
                <div className="small-box-first default-gradient">
                <div className="content">
                  <div className="category">
                    <h1> <span>Lorem Ipsum</span></h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sed eleifend dolor. {" "}
                  </p>
                  <h2>April 19, 2021 | Vishal Sharma</h2>
                </div>
                </div>
                <div className="small-box-second default-gradient">
                <div className="content">
                  <div className="category">
                    <h1> <span>Lorem Ipsum</span></h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sed eleifend dolor. .{" "}
                  </p>
                  <h2>April 19, 2021 | Vishal Sharma</h2>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="social-media-hero">
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
  verticleArticleCardFn(){
    
    /*
    const verticleArticleCardJSX=trendingData.map(article=>{
          return(
            <VerticleArticleCard 
            key={article.id}
            img={article.image}
            author={article.author} 
            category={article.category}
            headline={article.headline}
            date={article.date}
            text={article.text}
            />
        )
    })*/
    console.log("hello"+this.context.store)
   console.log(this.context.store.homepage.trend.length)
   if(this.context.store.homepage.trend[0]){
    const verticleArticleCardJSX=this.context.store.homepage.trend[0].map(article=>{
      return(
        <VerticleArticleCard 
        key={article._id}
        image={article.image}
        author={article.author} 
        category={article.category}
        headline={article.title}
        date={article.created}
        text={article.description}
        />
    )
})
    return verticleArticleCardJSX
  }
    
  }
  trending(){
    return(
      <>
      <div className="trending">
        <ArticleSectionHeading heading="trending" color="#64DBB5" textColor="#1f1f1f"/>
        <div className="articles-verticle">
          {this.verticleArticleCardFn()}
      </div>
      </div>
      </>
    )
  }
  adLeft(){
    return(
      <div className="ad-left">
      </div>
    )
  }
  secondSection(){
    return(
      <div className="second-section">
        {this.trending()}
        {this.adLeft()}
      </div>
    )
  }
  categoriesSection(){
    if(this.context.store.homepage){
     let flag=0
     const categoiesJSX=this.context.store.homepage.categoryArray.map((category,i)=>{
         //const categoiesJSX=categoriesData.map(category=>{
           flag=flag===0?1:0
           return(<CategorySection key={category.id} title={category.title} data={category.data} color={flag===0?"#333333":"#0000ff"}/>)
         })
         return(
           <div className="categories-section">
             {categoiesJSX}
           </div>
         )
    }
   
  }
  newsLetter(){
    return(
      <div className="newsletter">
        <h2>Subscribe for</h2>
        <h1>NewsLetter</h1>
        <div className="email-subscribe">
          <input placeholder="example@email.com" />
          <button onClick={()=>{console.log(this.context)
          console.log(this.state)}}>Subscribe</button>
        </div>
      </div>
    )
  }
  partnersites(){
    return(
      <div className="partner-websites">
        <div className="website-1"></div>
        <div className="website-2"></div>
      </div>
    )
  }
  render() {
    return <>
    {this.herobox()}
    {this.secondSection()}
    {this.categoriesSection()}
    {this.newsLetter()}
    {this.partnersites()}
    </>
  }
}
export default Homepage;
 