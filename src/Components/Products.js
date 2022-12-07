import React , {useState ,useEffect} from 'react'
import './Products.css';

const Products = () =>  {

    const [products , setproducts] = useState([]);

    useEffect(() => {

        const fetchproducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();

            setproducts(data);
        };
        fetchproducts();    
    },[])


  return (
      <>
      <h2> Welcome to Redux Toolkit Store  </h2> 
            <div className='productwrapper'>  
                { products.map((product) => (
                    <div className = 'card' key = {product.id}>
                        <img src = {product.image}  alt = " " /> 
                        <span>    {product.title}  </span>
                        <span>    {product.price} </span>
                        <button className='btn'> Add to Cart  </button>
                    </div>
                )) 
                }
            </div>
        </>
  )
}

export default Products