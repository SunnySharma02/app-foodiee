import React, { useContext, useState } from "react";
import "./Navbar.css";
import { images } from "../../images/images";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState();

  const {getTotalCartAmount, token, setToken} = useContext(StoreContext)

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }

  return (
    <div className="navbar">
      <Link to='/'>
        <div className="logo">
          <img src={images.foodiee_logo_icon} alt=""></img>
          <img className="logo-name" src={images.foodiee_logo_name} alt="" />
        </div></Link>
      <ul className="navbar-menu">
        <Link to='/'
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-App
        </a>
        <a href="#footer"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>
      <div className="navbar-right">
        <img className="search-icon-image" src={images.search_icon} alt=""></img>
        <div className="cart-icon">
          <Link to='/cart'><img className="cart-icon-image" src={images.cart_icon} alt=""></img></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>
        :<div className="navbar-profile">
          <img src={images.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li onClick={()=>navigate('/myorders')}><img src={images.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={images.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
