import React from "react";

export default function CarouselSection(props) {
  return (
    <div className="card" key={props.id}>
      
    <div style={{dispaly:"flex",height:"25vh",objectFit:'cover',marginBottom:"16%"}}>
     <img className="product--image" src={props.url} alt="" />

    </div>
  
      
      <div style={{paddingTop:"10%"}}>
      <h2 style={{marginBottom:"8%"}}>{props.name}</h2>

      </div>
      
      
      
     
    </div>
  );
}
