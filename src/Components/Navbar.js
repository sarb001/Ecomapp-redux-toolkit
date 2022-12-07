import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>  
     <span className='logo'> REDUX STORE  </span>

        <div style = {{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'30px'}}>
            <Link className = 'navlink' to = "/" >    Home </Link>
            <Link className = 'navlink' to = "/cart" > Cart </Link>
            <span className = 'cartcount'>  Cart Items : 0 </span>
        </div>
    </div>
  )
}

export default Navbar