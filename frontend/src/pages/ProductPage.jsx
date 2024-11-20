import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'

const ProductPage = ({products}) => {
    const [qty, setQty] = useState(1)
    const {_id} = useParams()

    const product = products.find((p) => p._id == _id)
    console.log(product.image)
    const addToCartHandler = () => {
        // Cart functionality to be implemented
        console.log(`Added ${qty} tickets to cart`)
    }

    return (
        <div className="py-3">
            <Row>
                <Col md={6}>
                    <Image src={`/${product.image}`} alt={product.name} fluid/>
                </Col>
                <Col md={6}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h4>Price: ${product.price}</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Location: {product.location}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Date: {product.date.toLocaleDateString("en-GB")}
                        </ListGroup.Item>
                    </ListGroup>

                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'Available' : 'Sold Out'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form.Control
                                                as='select'
                                                value={qty}
                                                onChange={(e) => setQty(Number(e.target.value))}
                                            >
                                                {[...Array(Math.min(product.countInStock, 10)).keys()].map(
                                                    (x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    )
                                                )}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}

                            <ListGroup.Item>
                                <Button
                                    onClick={addToCartHandler}
                                    className='btn-block'
                                    type='button'
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
    )
}

export default ProductPage