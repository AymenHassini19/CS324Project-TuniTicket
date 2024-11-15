import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './ui/Rating.jsx';
import './style/Product.css';

const Product = ({ product }) => {
  const imageStyle = {
    height: '200px',
    objectFit: 'cover',
    borderRadius: '5px',
  };

  return (
    <Card className="my-3 p-3 rounded product-card">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" style={imageStyle} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} className="product-link">
          <Card.Title as="div" className="product-title">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text>

        <Card.Text as="h3" className="product-price">
          TND&nbsp;{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

