import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import axios from "axios";

const ProductsUpdate = ({ products, setProducts }) => {
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        _id: "",
        name: "",
        image: "",
        description: "",
        location: "",
        date: "",
        category: "",
        price: "",
        countInStock: "",
    });
    const [selectedFile, setSelectedFile] = useState(null);

    const handleShowModal = (product = null) => {
        if (product) {
            // Editing mode: populate formData with the selected product's data
            setFormData({
                ...product,
                date: new Date(product.date).toISOString().split("T")[0], // Format date for input field
            });
            setIsEditing(true);
        } else {
            // Adding mode: reset formData to empty/default values
            setFormData({
                _id: "",
                name: "",
                image: "",
                description: "",
                location: "",
                date: "",
                category: "",
                price: "",
                countInStock: "",
            });
            setIsEditing(false);
        }
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedFile(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setFormData({ ...formData, image: `assets/products/${file.name}` });
        }
    };

    const handleDelete = async (productId) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this product?");
        if (!isConfirmed) {
            return;
        }
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:8000/api/products/${productId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setProducts(products.filter(product => product._id !== productId));
            alert("Product deleted successfully!");
        } catch (error) {
            console.error("Error deleting product:", error);
            alert("Error deleting product. Please try again.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let uploadedImagePath = formData.image;
    
        if (selectedFile) {
            // Upload file to the server
            const formDataObj = new FormData();
            formDataObj.append("image", selectedFile);
    
            try {
                const token = localStorage.getItem('token');
                const uploadResponse = await axios.post(
                    "http://localhost:8000/api/upload",
                    formDataObj,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            'Authorization': `Bearer ${token}`
                        },
                    }
                );
                uploadedImagePath = uploadResponse.data.imagePath; // Changed from filePath to imagePath
            } catch (error) {
                console.error("File upload failed", error);
                alert("File upload failed. Please try again.");
                return;
            }
        }
    
        // Update or create product with the uploaded image path
        try {
            const token = localStorage.getItem('token');
            const response = isEditing
                ? await axios.put(
                      `http://localhost:8000/api/products/${formData._id}`,
                      { ...formData, image: uploadedImagePath },
                      {
                          headers: {
                              'Authorization': `Bearer ${token}`
                          }
                      }
                  )
                : await axios.post("http://localhost:8000/api/products", {
                      ...formData,
                      image: uploadedImagePath,
                  },
                  {
                      headers: {
                          'Authorization': `Bearer ${token}`
                      }
                  });
    
            const updatedProduct = response.data.product;
            setProducts((prev) =>
                isEditing
                    ? prev.map((p) =>
                          p._id === updatedProduct._id ? updatedProduct : p
                      )
                    : [...prev, updatedProduct]
            );
            handleCloseModal();
            alert("Product saved successfully!");
            window.location.reload(); // Added page reload after successful save
        } catch (error) {
            console.error(error);
            alert("Error saving product. Please try again.");
        }
    };
    

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Manage Events</h2>

            <Button variant="primary" onClick={() => handleShowModal()}>
                Add Event
            </Button>

            <Accordion className="mt-4">
                {products.map((product) => (
                    <Accordion.Item eventKey={product._id} key={product._id}>
                        <Accordion.Header>{product.name}</Accordion.Header>
                        <Accordion.Body>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={`/${product.image}`}
                                    alt={product.name}
                                    style={{ width: '200px', height: 'auto' }}
                                />
                                <Card.Body>
                                    <Card.Text>
                                        <strong>Description:</strong>{" "}
                                        {product.description}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Location:</strong>{" "}
                                        {product.location}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Date:</strong>{" "}
                                        {new Date(product.date).toLocaleDateString()}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Category:</strong>{" "}
                                        {product.category}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Price:</strong> {" "} TDN {" "}
                                        {product.price}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Count in Stock:</strong>{" "}
                                        {product.countInStock}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between">
                                    <Button
                                        variant="secondary"
                                        onClick={() => handleShowModal(product)}
                                    >
                                        Modify
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() =>
                                            handleDelete(product._id)
                                        }
                                    >
                                        Delete
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {isEditing ? "Modify Event" : "Add New Event"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formImage">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="file"
                                name="image"
                                onChange={handleFileChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formCountInStock"
                        >
                            <Form.Label>Count In Stock</Form.Label>
                            <Form.Control
                                type="number"
                                name="countInStock"
                                value={formData.countInStock}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ProductsUpdate;



