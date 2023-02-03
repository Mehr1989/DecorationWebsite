
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselSection from "./CarouselSection";
import { productData, responsive } from "./data";





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
      <h1>React multi carousel</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
