import React from "react"
import Catagory from "../catagory/Catagory"
import { Banner } from "./banner/Banner"
import { Blog } from "./blog/Blog"
import { Details } from "./details/Details"
import { Card } from "./Hero/Card"
import { Hero } from "./Hero/Hero"
import { Price } from "./price/Price"
import { Product } from "./product/Product"
import { Testimonial } from "./testimonial/Testimonial"
import { TopProduct } from "./top/TopProduct"

export const Home = () => {
  return (
    <>
      
     
      <Catagory />
      <Product />
      
      <Banner />
      <TopProduct />
      
     
      <Testimonial />
     
    </>
  )
}
