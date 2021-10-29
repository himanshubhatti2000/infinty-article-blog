import React from 'react'
function ArticleSectionHeading (props){
        const textColor=props.textColor===undefined?'white':props.textColor
        return(
          <div className="article-section-heading" style={{borderBottom:`2px solid${props.color}`}}>
            <h1><span id="article-section-heading" style={{backgroundColor: props.color,color: textColor }}>{props.heading}</span></h1>
            <h2>view all</h2>
          </div>
        )

   
}

export default ArticleSectionHeading