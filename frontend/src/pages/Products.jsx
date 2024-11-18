import React from 'react'
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product.jsx';
import {Button} from "@/components/ui/button.jsx";

const Products = ({products}) => {
    return (
        <>
            <h2 style={{
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '5px',
                padding: '15px 30px',
                backgroundColor: '#343a40',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
                margin: '40px auto 30px',
                width: 'fit-content',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>All Events</h2>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Products