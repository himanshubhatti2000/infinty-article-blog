import React from "react";
import History from '../History/History'
function ClickCard(title){
  History.push(`/categories/${title}`)
}
function CategoryCard(props) {
  return (
    <div className="category-card default-gradient" onClick={()=>{ClickCard(props.title)}} >
      <h2 className="title"><span style={{backgroundColor: props.color}}>{props.title}</span></h2>
      <h3>Total articls: {props.totalArticles}</h3>
      <p>
        {props.desc}
      </p>
    </div>
  );
}
export default CategoryCard;
