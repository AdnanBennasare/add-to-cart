import React from 'react'
import '../Styles.css/NavBar.css'
const NavBar = ({size}) => {
  return (
  <nav>
    <div className="nav_box">
        <span className='my_shop'>
            my shoppings
        </span>
        <div className='cart'>
        <span>
            <i className='fas fa-cart-plus'></i>
        </span>
        <span>{size}</span>
        </div>

    </div>


  </nav>
  )
}

export default NavBar
