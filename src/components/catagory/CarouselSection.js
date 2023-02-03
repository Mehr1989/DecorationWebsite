import React from "react";

export default function CarouselSection(props) {
  return (
    <div className="card">
      
    <div style={{backgroundColor:"green",height:"15vh"}}>
     <img className="product--image" src={props.url} alt="product image" />

    </div>
  
      
      
      <h2>{props.name}</h2>
      
      <p>{props.description}</p>
     
    </div>
  );
}
