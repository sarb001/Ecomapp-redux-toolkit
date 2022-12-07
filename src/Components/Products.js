import React , {useState ,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { add, remove } from '../Store/cartSlice';
import './Products.css';

const Products = () =>  {

    const [products , setproducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchproducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();

            setproducts(data);
        };
        fetchproducts();    
    },[])

    const handlecart = (product) => {
         dispatch(add(product))
    }

  return (
      <>
      <h2> Welcome to Redux Toolkit Store  </h2> 
            <div className='productwrapper'>  
                { products.map((product) => (
                    <div className = 'card' key = {product.id}>
                        <img src = {product.image}  alt = " " /> 
                        <span>    {product.title}  </span>
                        <span>    {product.price} </span>
                        <button onClick={() => handlecart(product)}  className='btn'> Add to Cart  </button>
                    </div>
                )) 
                }
            </div>
        </>
  )
}

export default Products