import React from 'react';


const ProductItem = ({data}) => {
    const {picture , name , about , price} = data;
    return (
        <div className='product-item'> 
            <div className='product-item-content'>
                <img src={picture}/>
                <p className='title'>{name}</p>
                <p className='price'>{price}$</p>
            </div>
        </div>
    );
}

// Export out the React Component
export default ProductItem;