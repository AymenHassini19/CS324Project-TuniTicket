import React from 'react'
import Product from '../components/Product.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import Slider from '../components/ui/Slider.jsx';

function Home({products}) { 
    
    return (

<>

    
    <Slider products={products} />
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
    }}>More Events</h2>
                <Row>
                  {products.slice(0, 4).map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                    </Col>
                  ))}
                </Row>
</>
)
}
export default Home