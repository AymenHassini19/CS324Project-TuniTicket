import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Categories from "./pages/Categories.jsx";
import NavigationBar from "./components/shared/NavigationBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginScreen from "./pages/LoginScreen.jsx";
import Category from "./pages/Category.jsx";
import Products from "./pages/Products.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Customers from "./pages/Customers.jsx";
import Profile from "./pages/Profile.jsx";
import SignupScreen from "./pages/SignupScreen.jsx";
import axios from "axios";
import ProductsUpdate from "./pages/ProductsUpdate.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Persist cart in localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Fetch products from the backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/products");
                setProducts(response.data.products); // Assuming the API returns { products: [...] }
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError("Failed to load products.");
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const addToCart = (_id, qte) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item._id === _id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item._id === _id
                        ? { ...item, qte: Math.min(item.qte + qte, products.find((p) => p._id === _id).countInStock) }
                        : item
                );
            } else {
                return [...prevCart, { _id, qte }];
            }
        });
        console.log(cart)
    };

    return (
        <div
            style={{
                backgroundImage:
                    'url("https://img.freepik.com/photos-gratuite/fond-papier-peint_53876-25248.jpg?t=st=1731336912~exp=1731340512~hmac=19e2ee931accf30232dfece6a46fd6e308579816a0e33f60570c8eaf4da637eb&w=740")',
                backgroundSize: "cover",
                minHeight: "100vh",
            }}
        >
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route
                        path="/"
                        element={<Home products={products} loading={loading} error={error} />}
                    />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/signup" element={<SignupScreen />} />
                    <Route path="/Categories" element={<Categories />} />
                    <Route path="/category/:cat" element={<Category products={products} />}/>
                    <Route path="/events" element={<Products products={products} />} />
                    <Route path="/event/:_id" element={<ProductPage products={products} addToCart={addToCart} />} />
                    <Route path="/search" element={<SearchPage products={products} />} />
                    <Route path="/cart" element={<Cart setCart={setCart} cart={cart} products={products} />} />
                    <Route
                        path="/admin/customers"
                        element={
                            <PrivateRoute allowedRoles={["admin"]}>
                                <Customers />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/admin/events"
                        element={
                            <PrivateRoute allowedRoles={["admin"]}>
                                <ProductsUpdate products={products} setProducts={setProducts} />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoute allowedRoles={["user", "admin"]}>
                                <Profile />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
