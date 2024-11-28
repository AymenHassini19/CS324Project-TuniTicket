import React, { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";

const ProductPage = ({ products, addToCart }) => {


    const [qty, setQty] = useState(1);
    const { _id } = useParams();

    const product = products.find((p) => p._id.toString() === _id);

    if (!product) {
        return <h2 className="text-center">Product not found</h2>;
    }

    const addToCartHandler = () => {
        addToCart(product._id, qty);
        alert(`Added ${qty} tickets of ${product.name} to the cart`);
    };

    return (
        <div className="py-3">
            <Row>
                <Col md={6}>
                    <Image src={`/${product.image}`} alt={product.name} fluid />
                </Col>
                <Col md={6}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4>Price: TDN {product.price}</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                        <ListGroup.Item>Location: {product.location}</ListGroup.Item>
                        <ListGroup.Item>Date: {new Date(product.date).toLocaleDateString("en-GB")}</ListGroup.Item>
                    </ListGroup>

                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? "Available" : "Sold Out"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form.Control
                                                as="select"
                                                value={qty}
                                                onChange={(e) => setQty(Number(e.target.value))}
                                            >
                                                {[...Array(Math.min(product.countInStock, 10)).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}

                            <ListGroup.Item>
                                <Button
                                    onClick={addToCartHandler}
                                    className="btn-block"
                                    type="button"
                                    disabled={product.countInStock === 0}
                                >
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default ProductPage;
