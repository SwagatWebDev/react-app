import {LOGO_URL} from "../utils/constants";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import LogoImage from "../images/preview.png";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                    <img className="logo" src={LogoImage}/>
                </Link>
                <div className="app-name">Foodies</div>
            </div>
            <div className="nav-item">
                <ul>
                    <li>
                       Online Status: {onlineStatus ? "✅": "🛑"}
                    </li>
                    <li>Offers</li>
                    <li>
                        <Link to="/help">Help</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
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
