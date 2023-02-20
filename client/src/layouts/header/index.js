import React from "react";
import "./style.css";

function Header({ showLogin }) {
    return (
        <nav className="header-nav">
            <div className="nav-left">Logo</div>
            <div className="nav-right" onClick={() => showLogin(true)}>
                login
            </div>
        </nav>
    );
}

export default Header;
