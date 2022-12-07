import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {

    const items = useSelector((state) => state.cart)

  return (
    <div style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>  
     <span className='logo'> REDUX STORE  </span>

        <div style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'30px'}}>
            <Link className = 'navlink' to = "/" >    Home </Link>
            <Link className = 'navlink' to = "/cart" > Cart </Link>
            <span className = 'cartcount'>  Cart Items : {items.length} </span>
        </div>
    </div>
  )
}

export default Navbar