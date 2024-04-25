import React from 'react'
import './ProductDisplay.css'
import star_icon from "../assests/star_icon.png"
import star_dull_icon from "../assests/star_dull_icon.png"

const ProductDisplay = () => {
    const{product}=props;
  return (
    <div classname='productdisplay'>
        <div ClasName="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src= {product.image} alt="" />
                <img src= {product.image} alt="" />
                <img src= {product.image} alt="" />
                <img src= {product.image} alt="" />

            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
                </div> 

        </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
        <img src= {star_icon}alt=""/>
        <img src={star_icon} alt=""/>    
        <img src= {star_icon} alt=""/>
        <img src={star_icon} alt=""/>  
        <img src= {star_dull_icon} alt=""/>    
        <p> (122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">Rs{product.oldprice}</div>
            <div className="productdisplay-right-price-new">Rs{product.newprice}</div>
            

        </div>
       < div className="productdisplay-right-description">
        Brand New product with long battery usage. 
    
       </div>
       <button> ADD TO CART</button>
       <p className='productdisplay-right-category:'><span>Category</span>Laptop,Phones,Earphones,Watches</p>

      </div>
    </div>
  )
}

export default ProductDisplay