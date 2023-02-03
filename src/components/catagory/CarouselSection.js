import React from "react";

export default function CarouselSection(props) {
  return (
    <div className="card">
      
    <div style={{dispaly:"flex",height:"25vh",objectFit:'cover'}}>
     <img src={props.url} alt="home" />

    </div>
  
      
      
      <h2>{props.name}</h2>
      
      <p>{props.description}</p>
     
    </div>
  );
}
