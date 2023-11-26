import {LOGO_URL} from "../utils/constants";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    useEffect(() => {
        console.log("useEffect Called")
    }, []);
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                    <img className="logo" src={LOGO_URL}/>
                </Link>
                <div className="app-name">Foodies</div>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Offers</li>
                    <li>
                        <Link to="/help">Help</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName === "Login"
                            ? setBtnName("Logout")
                            : setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
