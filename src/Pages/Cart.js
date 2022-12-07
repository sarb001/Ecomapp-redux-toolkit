import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { remove } from '../Store/cartSlice';

const Cart = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const removecart = (productid) => {

      dispatch(remove(productid));
  }
  return (
    <div>
      <h2>  Cart  </h2>
      <div className='productwrapper'>  
                {
                   products.map((product) => (
                    <div className = 'card' key = {product.id}>
                        <img src = {product.image}  alt = " " /> 
                        <span>    {product.title}  </span>
                        <span>    {product.price} </span>
                        <button onClick={() => removecart(product.id)}  className='btn'>  Remove  </button>
                    </div>
                )) 
                }
            </div>
    </div>
  )
}

export default Cart