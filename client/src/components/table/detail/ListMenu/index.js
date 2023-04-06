import React from "react";
import "./style.css";

function ListMenu({ lstMenu }) {
    return (
        <div className="list-menu">
            {lstMenu.length !== 0 &&
                lstMenu.map((menu, index) => (
                    <div key={index} className="menu-item">
                        <div className="image">
                            <img src="" alt={menu.fName} />
                        </div>
                        <div className="name">{menu.fName}</div>
                        <div className="price">{menu.fPrice}</div>
                    </div>
                ))}
        </div>
    );
}

export default ListMenu;
