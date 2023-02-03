
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { productData, responsive } from "./data";
import CarouselSection from "./CarouselSection";





export default function Catagory() {
  const product = productData.map((item) => (
    <CarouselSection
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="Catagory">
      <div style={{backgroundColor:"pink",display:"flex",justifyContent:"center"}}>
      <h1>ایده های دیزاین خانه</h1>

      </div>
      <div>

       <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
      </div>
      
     
    </div>
  );
}
