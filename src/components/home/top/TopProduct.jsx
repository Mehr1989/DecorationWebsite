import React, { useState } from "react"
import { topProducts } from "../../assets/data/data"
import { Heading } from "../../common/Heading"
import { ProductItems } from "../product/ProductItems"

export const TopProduct = () => {
  const [cartItems, setCartItems] = useState(topProducts)
  const allCategories = ["همه", ...new Set(cartItems.map((item) => item.category))]
  const [category, setCategory] = useState(allCategories)

  /*console.log(setCartItems)
  console.log(setCategory)
  console.log(allCategories)*/

  const handleFilter = (category) => {
    const newItem = topProducts.filter((item) => item.category === category)
    setCartItems(newItem)

    if (category === "همه") {
      setCartItems(topProducts)
      return
    }
  }
  return (
    <>
      <section className='topproduct'>
        <div className='container'>
          <div className='head' style={{display:'flext',direction:"rtl"}}>
          
            <div className='category'>
                                        
                              
              {category.map((category) => (
                <button className='button' onClick={() => handleFilter(category)}>
                  {category} 
                </button>
              ))}
            </div>
          </div>
          <div style={{marginTop:"2%",direction:"rtl"}}>
          <ProductItems cartItems={cartItems} />

          </div>
         
        </div>
      </section>
    </>
  )
}
