import React from 'react';
import Card from './Card';
import ProductData from './ProductData';
 

const Products=()=>{
 
        return (
            
            <div className='card-list' > 
                 
                {ProductData.map((n)=><Card key={n.id} name={n.name} img={n.im} amount={n.amt}></Card>)}
                 </div>
        )
    }
export default Products;