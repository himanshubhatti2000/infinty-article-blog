import React from 'react'
import {categoriesData} from '../data/data'
import Article from './Article'
function VerticleArticleCard (props){
        let categoryColor
        for(let i=0; i<categoriesData.length;i++){
          if(categoriesData[i].name===props.category){
            categoryColor=categoriesData[i].color
            break
          }        
        else{
          continue
        }}
        return(
            <Article styleClass="verticle" image={props.image} headline={props.headline} text={props.text} date={props.date} author={props.author} category={props.category} categoryColor={categoryColor} />
        )
    
}

export default VerticleArticleCard