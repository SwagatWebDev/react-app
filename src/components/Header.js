import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../images/preview.png";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between items-center bg-gradient-to-r from-emerald-200 via-yellow-50 shadow-lg p-4">
            <div className="logo-container flex items-center">
                <Link to="/">
                    <img className="w-24" src={LogoImage} alt="Logo" />
                </Link>
                <div className="ml-4 text-xl font-bold">Foodies</div>
            </div>
            <div className="flex items-center">
                <ul className="flex space-x-4">
                    <li>
                        Online Status: {onlineStatus ? "✅" : "🛑"}
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
                    <li>Carts</li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
