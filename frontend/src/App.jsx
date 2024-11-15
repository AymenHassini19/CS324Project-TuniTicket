import "bootstrap/dist/css/bootstrap.min.css";
import { initialProducts } from "./components/data.js";
import { useState } from "react";
import Categories from "./pages/Categories.jsx";
import NavigationBar from "./components/shared/NavigationBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginScreen from "./pages/LoginScreen.jsx";
import {users} from "./components/data.js"
import Category from "./pages/Category.jsx";
import Products from "./pages/Products.jsx";


function App() {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("currentUser")) || null
    );

    const handleLogin = (username, password) => {
        const user = users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            setCurrentUser(user);
            localStorage.setItem("currentUser", JSON.stringify(user));
        } else {
            alert("Invalid credentials");
        }
    };

    const handleLogout = () => {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
    };


    const [products, setProduct] = useState(initialProducts);




    return (
        <div  style={{backgroundImage:'url("https://img.freepik.com/photos-gratuite/fond-papier-peint_53876-25248.jpg?t=st=1731336912~exp=1731340512~hmac=19e2ee931accf30232dfece6a46fd6e308579816a0e33f60570c8eaf4da637eb&w=740")', backgroundSize:"cover", minHeight:"100vh"}}>

            <BrowserRouter>
                <NavigationBar currentUser={currentUser} logout={handleLogout}/>
                <Routes>
                    <Route path="/" element={<Home products={products} />} />
                    <Route path="/login" element={<LoginScreen onLogin={handleLogin}/>} />
                    <Route path="/Categories" element={<Categories/>} />
                    <Route path="/category/:cat" element={<Category products={products}/>} />
                    <Route path="/events" element={<Products products={products}/>} />
                </Routes>
            </BrowserRouter>



        </div>
    );
}

export default App;

