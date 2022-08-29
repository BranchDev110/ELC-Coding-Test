/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';
import ProductItem from './ProductItem';


const Home = ({data}) => {
    return (
        <section id="home">
            <div className="content">
                {
                    data.map(item => <ProductItem data={item} key={item._id}/>)
                }
            </div>
        </section>
    )
}

// Export out the React Component
export default Home;