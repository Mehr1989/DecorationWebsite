import React, { useState } from "react"
import { FiShoppingBag, FiSearch } from "react-icons/fi"
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { ADD } from "../../../controller/action"

export const ProductItems = ({ cartItems }) => {
  const dispatch = useDispatch()
  const addToCart = (e) => {
    // console.log(e)
    // ADD(e) => single items lai add garko
    dispatch(ADD(e))
  }

  const [openImage, setOpenImage] = useState(false)
  const [img, setImg] = useState("")
  const onOpenImage = (src) => {
    setImg(src)
    setOpenImage(true)
  }

  return (
    <>
      <div className='product_items'>
        {cartItems.map((items) => (
          <div className='box' key={items.id}>
            <div className='img'>
              {/* <Link to={`/cart/${items.id}`}>
                <img src={items.cover} alt='' />
              </Link>*/}
              <div style={{marginTop:"5%",padding:"5%",height:"45vh",width:"auto"}}>  
                 <img src={items.cover} alt='' />
               </div>
           
              <div className='overlay'>
                {/* 
                =>yadi button ma click garyo bhane chai items chai add hunxa 
                =>items chai map((items) garrko xa data bata
                */}
                <button className='button' onClick={() => addToCart(items)}>
                  <FiShoppingBag />
                </button>
                <button className='button'>
                  <AiOutlineHeart />
                </button>
                <button className='button' onClick={() => onOpenImage(items.cover)}>
                  <FiSearch />
                </button>
              </div>
            </div>
            <div className='details'>
              <div style={{display:"flex",justifyContent:"center"}}>
              <h3 style={{fontSize:"20px",fontWeight:"800"}}>{items.title}</h3>
              

              </div>
              <div style={{height:"9vh"}}>

                <p>{items.author}</p>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className={openImage ? "modelOpen" : "modelClose"}>
        <div className='onClickImage'>
          <img src={img} alt='' />
          <button className='button' onClick={() => setOpenImage(false)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </>
  )
}
