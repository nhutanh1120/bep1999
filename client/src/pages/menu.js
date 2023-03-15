import React from "react";
import MenuBox from "./../components/menu/MenuBox";
import "./../assets/css/menu.css";

const a = null;

function Menu() {
    return (
        <div className="menu">
            <div className="menu-header">
                <div className="menu-kind-of-food">
                    <div className="button">
                        <i className="bx bx-plus"></i>
                    </div>
                </div>
                <div className="menu-food">
                    <div className="button">
                        <i className="bx bx-plus"></i>
                    </div>
                </div>
            </div>
            <div className="menu-content">
                <MenuBox lstMenu={a} />
            </div>
        </div>
    );
}

export default Menu;
