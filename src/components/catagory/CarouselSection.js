import React from "react";

export default function CarouselSection(props) {
  return (
    <div className="card" key={props.id}>
      
    <div style={{dispaly:"flex",height:"25vh",objectFit:'cover'}}>
     <img className="product--image" src={props.url} alt="" />

    </div>
  
      
      
      <h2>{props.name}</h2>
      
      
     
    </div>
  );
}
