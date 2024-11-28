import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

const Customers = () => {
  const url = "http://localhost:8000/api/users"; 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setUsers(res.data.users);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const token = localStorage.getItem('token');
      axios
        .delete(`${url}/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then((res) => {
          // Use the previous state to avoid issues with async state updates
          setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "40px" }}>
      <h2 className="text-white no-underline rounded p-4 bg-gray-800 text-2xl font-bold text-center my-10 mx-auto w-fit shadow-md">Customers</h2>;
      {users.map((user) => (
        <Accordion key={user._id}> {/* Add key here for better performance */}
          <Accordion.Item eventKey={user._id}> {/* Unique eventKey for each item */}
            <Accordion.Header
              style={{
                backgroundColor: "lightgrey",
                color: "white",
                fontWeight: "bold",
                padding: "10px 10px",
                borderBottom: "1px solid #e3e3e3",
                cursor: "pointer",
              }}
            >
              {user.username.toUpperCase()}
            </Accordion.Header>
            <Accordion.Body
              style={{
                padding: "15px",
                fontsize: "16px",
                lineHeight: "1.5",
                color: "#333",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h5 style={{ marginBottom: "10px", color: "#555" }}>
                  Email: {user.email}
                </h5>
                <h5>Age: {user.age}</h5>
              </div>
              <div>
                <Button
                  style={{ width: "80px" }}
                  variant="danger"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};

export default Customers;
