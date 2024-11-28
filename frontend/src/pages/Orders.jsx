import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      const { data } = await axios.get('http://localhost:8000/api/orders', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setOrders(data.orders);
    };

    const fetchUsers = async () => {
      const token = localStorage.getItem('token');
      const { data } = await axios.get('http://localhost:8000/api/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUsers(data.users);
    };

    const fetchProducts = async () => {
      const token = localStorage.getItem('token');
      const { data } = await axios.get('http://localhost:8000/api/products', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setProducts(data.products);
    };

    fetchOrders();
    fetchUsers();
    fetchProducts();
  }, []);

  const getUserNameById = (userId) => {
    const user = users.find((user) => user._id === userId);
    return user ? user.username : 'Unknown User';
  };

  const getProductNameById = (productId) => {
    const product = products.find((product) => product._id === productId);
    return product ? product.name : 'Unknown Product';
  };

  return (
    <div className="container mt-5">
      <h2 className="text-white no-underline rounded p-4 bg-gray-800 text-2xl font-bold text-center my-10 mx-auto w-fit shadow-md"> Orders </h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Username</th>
            <th>Event</th>
            <th>Quantity</th>
            <th>Purchase Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{getUserNameById(order.userId)}</td>
              <td>{getProductNameById(order.productId)}</td>
              <td>{order.qty}</td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;




