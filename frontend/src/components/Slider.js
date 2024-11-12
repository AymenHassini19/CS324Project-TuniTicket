import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({ products }) => {
  // Get the last 3 products
  const latestProducts = products.slice(-3);

  return (
    <Carousel interval={3000}>
      {latestProducts.map((product) => (
        <Carousel.Item key={product.id}>
          <Link to={`/ProductDetails/${product.id}`}>
            <img
              className="d-block w-100"
              src={product.image}
              alt={product.name}
              style={{ height: '500px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3 style={{
                backgroundColor: 'rgba(0,0,0,0.7)',
                padding: '15px',
                borderRadius: '5px',
                color: 'white'
              }}>
                {product.name}
              </h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
