import React, {Component} from 'react'
import CategoryCard from './CategoryCard'
import {categoriesData} from '../data/data'
class Categories extends Component{
    categoryCards(){
        const categoryCardsJSX=categoriesData.map(category=>{
            return(
                <CategoryCard key={category.id} 
                title={category.name} 
                totalArticles={category.totalArticles}
                desc={category.desc} color={category.color} />
            )
        })
        return categoryCardsJSX
    }
    render(){
        return(
            <div className="categories-page">
                <h1>Categories</h1>
                <div className='category-cards'>
                    {this.categoryCards()}
                </div>
            </div>
        )
    }
}
export default Categories