import React from 'react';
import Product from '../components/Product.jsx';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import '../components/style/Category.css'; // Make sure this CSS file is created for custom styles

const Category = ({ products }) => {
  const { cat } = useParams();

  // Filter products based on the category selected
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === cat.toLowerCase()
  );

  return (
    <div className="category-container">
      <div className="category-header text-center mb-5">
        <h1 className="category-title text-capitalize">{cat}</h1>
      </div>

      <Row className="g-4 justify-content-center">
        {filteredProducts.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Category;

