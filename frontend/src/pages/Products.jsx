import React from 'react';
import Product from '../components/Product.jsx';

const Products = ({products}) => {
    return (
        <>
            <h2 className="text-white no-underline rounded p-4 bg-gray-800 text-2xl font-bold text-center my-10 mx-auto w-fit shadow-md">
                All Events
            </h2>
            <div className="flex flex-wrap -mx-4">
                {products.map((product) => (
                    <div key={product._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <Product product={product}/>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;