import React from 'react'
import { useParams } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import { useState } from 'react';

const ProductDetails = ({products}) => {

    const { id } = useParams();
    const elt = products.find(item => item.id === Number(id))

    const [isExpanded, setIsExpanded] = useState(false);

    const renderStars = () => {
      return (
        <>
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              <i className={index < elt.rating ? 'fas fa-star' : 'far fa-star'}></i>
            </span>
          ))}
        </>
      );
    };

  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0" 
      }}>
        <Card style={{ width: "18rem", marginTop: "60px" }}>
          <Card.Img variant="top" src={elt.image} style={{ maxHeight: "200px" }} />
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
              <Card.Title> {elt.name} </Card.Title>
              <Card.Text>{elt.price} $</Card.Text>
            </div>
            <div className="stars">{renderStars()}</div>
            <p>Introducing our premium [Product Name], designed to enhance your everyday experience. Crafted with high-quality materials, this product offers exceptional durability and performance. </p>
            <button>
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          </Card.Body>
        </Card>
      </div>
  )
}

export default ProductDetails