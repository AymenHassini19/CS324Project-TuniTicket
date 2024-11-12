import React from "react";
import CardItem from "./CardItem";
export default function ListOfProducts({
  products,
  handleIncrement,
  handleDecrement,
  handleDelete,
  handleSumDecrement,
  handleSumIncrement,
  handleSumDelete,
  sum,
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "120px" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {products.map((elt) => (
          <CardItem
            elt={elt}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
            handleSumDecrement={handleSumDecrement}
            handleSumIncrement={handleSumIncrement}
            sum={sum}
            handleSumDelete={handleSumDelete}
          />
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        {products.length !== 0 ? (
          <h1> Total: {sum} $ </h1>
        ) : (
          <h1> You have no Products</h1>
        )}
      </div>
    </div>
  );
}
