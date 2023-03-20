import React, { useState } from "react";
import MenuBox from "./../components/menu/MenuBox";
import FormKindOfFood from "./../components/menu/FormKindOfFood";
import FormFood from "./../components/menu/FormFood";
import { useSelector } from "react-redux";
import "./../assets/css/menu.css";

function Menu() {
    const lstMenu = useSelector((state) => state.menu);
    const [state, setState] = useState(null);
    const toggleDisplay = (status) => {
        setState(status);
    };
    const handleClickKindOfFood = () => {
        setState("kind");
        document.querySelector("#overlay").classList.add("active");
    };

    const handleClickFood = () => {
        setState("food");
        document.querySelector("#overlay").classList.add("active");
    };

    return (
        <div className="menu">
            <div className="menu-header">
                <div className="menu-kind-of-food" onClick={handleClickKindOfFood}>
                    <div className="button">
                        <i className="bx bx-plus"></i>
                    </div>
                </div>
                <div
                    className={(lstMenu.length === 0 && "menu-food disable-events") || "menu-food"}
                    onClick={handleClickFood}
                >
                    <div className="button">
                        <i className="bx bx-plus"></i>
                    </div>
                </div>
            </div>
            <div className="menu-content">
                <MenuBox lstMenu={lstMenu} />
            </div>
            <aside className="menu-aside">
                <FormKindOfFood display={state} toggleDisplay={toggleDisplay} />
                <FormFood display={state} toggleDisplay={toggleDisplay} />
            </aside>
        </div>
    );
}

export default Menu;
