import React from 'react';
import Product from '../components/Product.jsx';
import {useParams} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

const Category = ({products}) => {
    const {cat} = useParams();

    const filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === cat.toLowerCase()
    );

    return (
        <div className="p-12 w-full box-border">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold uppercase tracking-widest text-gray-300 bg-gradient-to-r from-gray-600 to-gray-800 p-2 rounded shadow-md">
                    {cat}
                </h1>
            </div>

            <Row className="g-4 justify-center">
                {filteredProducts.map((product) => (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Category;