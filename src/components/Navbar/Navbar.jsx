import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assests/logo_big.png'
import cart_icon from '../assests/logo2.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo}/>
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() =>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to ='/'>Shop</Link> {menu==="shop"? <hr/>:<></>}</li>
            <li onClick={() =>{setMenu("Laptops")}}><Link  style={{textDecoration:'none'}} to ='/Laptops'>Laptops</Link> {menu==="Laptops"? <hr/>:<></>}</li>
            <li onClick={() =>{setMenu("Smart Phone")}}><Link  style={{textDecoration:'none'}} to  ='/Smart Phone'>Smart Phone</Link> {menu==="Smart Phone"? <hr/>:<></>}</li>
            <li onClick={() =>{setMenu("Watches")}}><Link   style={{textDecoration:'none'}} to ='/Watches'>Watches</Link> {menu==="Watches"? <hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to = '/login'><button>Login</button></Link>
            <Link to ='/cart'><img src={cart_icon} /></Link>
            <div className="nav-cart-count">0</div>
        </div>


    </div>
  )
}
