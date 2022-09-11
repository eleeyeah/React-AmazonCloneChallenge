import React, {useEffect, useState } from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch('https://631e02e1789612cd07b4dbf5.mockapi.io/product').then((response) => response.json()).then((products)=>{
        setProducts(products)
        console.log(products)
      })
    }, [])
    
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image'
                    src='https://m.media-amazon.com/images/I/617EFlHVbuL._SX3000_.jpg'
                    alt=''
                />
                <div className='home__row'>
                    {products.map((product)=>{
                        return <Product
                        id={product.id}
                        title={product.title}
                        price= {product.price}
                        rating={3}
                        image= {product.image}
                    />
                    
                    })}
                    
                </div>
            </div>


        </div>
    );


}

export default Home