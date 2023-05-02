import React from "react";
import { Link } from "react-router-dom";
import menu from "./../../../../assets/json/menuNavbar.json";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-pc">
            <ul className="navbar-menu">
                {menu.map((item, index) => (
                    <li key={index}>
                        <Link>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
