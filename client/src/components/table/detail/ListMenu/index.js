import React from "react";
import "./style.css";

function ListMenu({ lstMenu }) {
    return (
        <div className="grid list-menu">
            {lstMenu.length !== 0 &&
                lstMenu.map((menu, index) => (
                    <div key={index} className="col l-2 menu-item">
                        <div className="image">
                            <img src="" alt="menu" />
                        </div>
                        <div className="name">{menu.kofName}</div>
                        <div className="price"></div>
                    </div>
                ))}
        </div>
    );
}

export default ListMenu;
