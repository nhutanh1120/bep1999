import React from "react";
import "./style.css";

function ListMenu({ lstMenu }) {
    return (
        <div className="list-menu">
            {lstMenu.length !== 0 &&
                lstMenu.map((menu, index) => (
                    <div key={index} className="menu-item">
                        <div className="image">
                            {menu.image ? (
                                <img src={menu.image} alt={menu.fName} />
                            ) : (
                                <i className="bx bx-image bx-flip-horizontal bx-md"></i>
                            )}
                        </div>
                        <div className="name">{menu.fName}</div>
                        <div className="price">{menu.fPrice}&nbsp;vnd</div>
                    </div>
                ))}
        </div>
    );
}

export default ListMenu;
