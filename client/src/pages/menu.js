import React, { useState, useEffect } from "react";
import MenuBox from "./../components/menu/MenuBox";
import KindOfFood from "./../components/menu/KindOfFood";
import "./../assets/css/menu.css";

const lstMenu = [
    {
        name: "Lẩu",
        description: "đậm chất lẩu việt",
        food: [],
    },
];

function Menu() {
    const dispatch = useDispatch();
    const [state, setState] = useState(false);
    const toggleDisplay = (status) => {
        setState(status);
    };
    const handleClickKindOfFood = () => {
        setState(true);
        document.querySelector("#hidden").classList.add("active");
    };

    useEffect(() => {
        if (dispatch) {
            const getAllMenu = () => {
                return fetchAllAgricultural().then((res) => {
                    dispatch(dispatchGetAllAgricultural(res));
                });
            };
            getAllMenu();
        }
    }, [dispatch]);
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
