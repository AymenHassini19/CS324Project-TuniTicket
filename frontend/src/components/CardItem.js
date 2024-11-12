import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";


export default function CardItem({
  elt,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleSumIncrement,
  handleSumDecrement,
  handleSumDelete,
}) {
  const increment = () => {
    handleIncrement(elt.id);
    handleSumIncrement(elt.price);
  };
  const decrement = () => {
    handleDecrement(elt.id);
    handleSumDecrement(elt);
  };

  const deleteProduct = () => {
    handleDelete(elt.id);
    handleSumDelete(elt);
  };

  const navigate = useNavigate();
  const showDetails=()=>{
    navigate(`/ProductDetails/${elt.id}`)
    };

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
          <Card.Text>{elt.price} $</Card.Text>{" "}
        </div>
        <div className="stars">{renderStars()}</div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Button variant="success" onClick={increment}>
            +
          </Button>
          <span>{elt.qte}</span>
          <Button variant="primary" onClick={decrement}>
            -
          </Button>
        </div>

        <Button variant="danger" onClick={deleteProduct}>
          Delete
        </Button>
        <Button variant="light"  onClick={showDetails}>
          Details
        </Button>
      </Card.Body>
    </Card>
  );
}


