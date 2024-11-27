import React, { useState } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, products, setCart }) => {
  const handleRemoveProduct = (productId) => {
    setCart(cart.filter((item) => item._id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce((acc, cartItem) => {
    const product = products.find((p) => p._id === cartItem._id);
    if (product) {
      return acc + product.price * cartItem.qte;
    }
    return acc;
  }, 0);

  if (cart.length === 0) {
    return <h2 className="text-white no-underline rounded p-4 bg-gray-800 text-2xl font-bold text-center my-10 mx-auto w-fit shadow-md">Your cart is empty</h2>;
  }

  return (
    <section className="h-100">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                Shopping Cart
              </MDBTypography>
            </div>

            {cart.map((cartItem) => {
              const product = products.find((p) => p._id === cartItem._id);
              if (!product) {
                return null; // Skip if product is not found
              }

              return (
                <MDBCard className="rounded-3 mb-4" key={cartItem._id}>
                  <MDBCardBody className="p-4">
                    <MDBRow className="justify-content-between align-items-center">
                      <MDBCol md="2" lg="2" xl="2">
                        <MDBCardImage
                          className="rounded-3"
                          fluid
                          src={product.image}
                          alt={product.name}
                        />
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="3">
                        <p className="lead fw-normal mb-2">{product.name}</p>
                        <p>
                          <span className="text-muted">Price: </span>${product.price}
                        </p>
                      </MDBCol>
                      <MDBCol md="3" lg="3" xl="2" className="d-flex align-items-center justify-content-around">
                        <MDBBtn color="link" className="px-2">
                          <MDBIcon fas icon="minus" />
                        </MDBBtn>

                        <MDBInput
                          min={0}
                          value={cartItem.qte}
                          type="number"
                          size="sm"
                          disabled
                        />

                        <MDBBtn color="link" className="px-2">
                          <MDBIcon fas icon="plus" />
                        </MDBBtn>
                      </MDBCol>
                      <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                        <MDBTypography tag="h5" className="mb-0">
                          TDN {product.price * cartItem.qte}
                        </MDBTypography>
                      </MDBCol>
                      <MDBCol md="1" lg="1" xl="1" className="text-end">
                        <a
                          href="#!"
                          className="text-danger"
                          onClick={() => handleRemoveProduct(cartItem._id)}
                        >
                          <FontAwesomeIcon icon={faTrash} style={{color: "#cc0000"}} size="lg" />
                        </a>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              );
            })}

            <MDBCard className="rounded-3 mb-4">
              <MDBCardBody className="p-4">
                <MDBRow className="justify-content-between align-items-center">
                  <MDBCol md="6" lg="6" xl="6">
                    <MDBTypography tag="h5" className="mb-0">
                      Total Price: TDN {totalPrice.toFixed(2)}
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol md="6" lg="6" xl="6" className="text-end">
                    <MDBBtn color="danger" onClick={handleClearCart}>
                      Empty Cart
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default Cart;
