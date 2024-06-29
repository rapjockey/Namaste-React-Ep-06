import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () =>{
    const [LogBtn , setLogbtn] = useState ("Login")
    return (
       <div className="head">
            <div className="logo">
                <img className="logo-img" src={LOGO_URL}/>
            </div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login-btn"
                        onClick={() => {
                        LogBtn === "Login" ?  setLogbtn("Log Out") : setLogbtn("Login");
                        }}
                    >{LogBtn}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;