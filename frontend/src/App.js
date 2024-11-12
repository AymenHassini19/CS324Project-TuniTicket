import "bootstrap/dist/css/bootstrap.min.css";
import { initialProducts } from "./components/data";
import { useState } from "react";
import Categories from "./screens/Categories";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import ProductDetails from "./components/ProductDetails";
import LoginScreen from "./screens/LoginScreen";
import {users} from "./components/data"


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
      localStorage.setItem("currentUser", JSON.stringify(user)); // Save to local storage
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser"); // Remove from local storage
  };






  const [products, setProduct] = useState(initialProducts);
  const [sum, setSum] = useState(0);

  const handleIncrement = (id) => {
    setProduct(
      products.map((elt) => {
        if (elt.id === id) {
          return { ...elt, qte: elt.qte + 1 };
        }
        return elt;
      })
    );
  };

  const handleDecrement = (id) => {
    setProduct(
      products.map((elt) => {
        if (elt.id === id && elt.qte > 0) {
          return { ...elt, qte: elt.qte - 1 };
        }
        return elt;
      })
    );
  };

  const handleDelete = (id) => {
    setProduct(products.filter((elt) => elt.id !== id));
  };

  // we can include setSum(sum+elt.price) to the const handleIncrement = (elt) => {...}  but The separation in 2 functions
  //can help in understanding the logic better and is in line with the Single Responsibility Principle (one function doing one thing).

  const handleSumIncrement = (price) => {
    setSum(sum + price);
  };
  const handleSumDecrement = (article) => {
    if (article.qte > 0) {
      setSum(sum - article.price);
    }
  };

  const handleSumDelete = (article) => {
    setSum(sum - article.price * article.qte);
  };

  return (
<div  style={{backgroundImage:'url("https://img.freepik.com/photos-gratuite/fond-papier-peint_53876-25248.jpg?t=st=1731336912~exp=1731340512~hmac=19e2ee931accf30232dfece6a46fd6e308579816a0e33f60570c8eaf4da637eb&w=740")', backgroundSize:"cover", minHeight:"100vh"}}>

<BrowserRouter>
<NavigationBar currentUser={currentUser} logout={handleLogout}/>
<Routes>
<Route path="/" element={<Home products={products} />} />
<Route path="/login" element={<LoginScreen onLogin={handleLogin}/>} />
<Route path="/Categories" element={<Categories/>} />
<Route path="/ProductDetails/:id" element={<ProductDetails products={products} />}/>
</Routes>

<div>
      {!currentUser ? (
        <h1>no one is loged in</h1>
      ) : (
        <div>
          <h1>Welcome, {currentUser.username}</h1>
          {currentUser.isAdmin ? (
            <p>You are logged in as an Admin.</p>
          ) : (
            <p>You are logged in as a Normal User.</p>
          )}
        </div>
      )}
    </div>

</BrowserRouter>



    </div>
  );
}

export default App;

