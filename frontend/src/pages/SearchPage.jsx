import React from 'react';
import Product from '../components/Product.jsx';
import { useLocation } from 'react-router-dom';

const SearchPage = ({ products }) => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query') || '';

    console.log("Search query:", query);
    console.log("Products:", products);

    const filteredProducts = products.filter((product) => {
        return (
            product.name?.toLowerCase().includes(query.toLowerCase()) ||
            product.location?.toLowerCase().includes(query.toLowerCase()) ||
            new Date(product.date).toLocaleDateString("en-GB").includes(query) // Adjust as needed
        );
    });

    return (
        <div className="search-page">
            {filteredProducts.length > 0 ? (
                <>
                    <h2 className="text-white no-underline rounded p-4 bg-gray-800 text-2xl font-bold text-center my-10 mx-auto w-fit shadow-md">
                        Search Results for "{query}"
                    </h2>
                    <div className="flex flex-wrap justify-center -mx-4">
                        {filteredProducts.map((product) => (
                            <div key={product._id.toString()} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                                <Product product={product} />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <h2 className="text-white no-underline rounded p-4 bg-gray-800 text-2xl font-bold text-center my-10 mx-auto w-fit shadow-md">
                    No results found for "{query}"
                </h2>
            )}
        </div>
    );
};

export default SearchPage;


