import React, { useState } from "react";
import MenuBox from "./../components/menu/MenuBox";
import KindOfFood from "./../components/menu/KindOfFood";
import "./../assets/css/menu.css";

const lstMenu = null;

function Menu() {
    const [state, setState] = useState(false);
    const toggleDisplay = (status) => {
        setState(status);
    };
    const handleClickKindOfFood = () => {
        setState(true);
        document.querySelector("#hidden").classList.add("active");
    };
    return (
        <div className="menu">
            <div className="menu-header">
                <div className="menu-kind-of-food" onClick={handleClickKindOfFood}>
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
                <MenuBox lstMenu={lstMenu} />
            </div>
            <aside className="menu-aside">
                <KindOfFood display={state} toggleDisplay={toggleDisplay} />
            </aside>
        </div>
    );
}

export default Menu;
