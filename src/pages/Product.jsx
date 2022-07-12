import React from 'react'
import "../Styles/Product.css"
import {Link} from 'react-router-dom'


const Product = (props) => {
  return (
    <>
      <div className="container_p">
        <div className="imgBox">
          <img src="/unnamed.jpeg" alt="product" height="600"/>
        </div>
        <div className="aboutBox">
          <h1 className="title_p">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
          <h2 className="catagory_p">men's clothing</h2>
          <h3 className="desc_p">Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...</h3>
          <h2 className="price_p">$109.95</h2>
          <button className="btn_p">Buy Now</button>
          <Link to="/" className='btn2_p'>Go Back</Link>
        </div>
      </div>
    </>
  )
}

export default Product