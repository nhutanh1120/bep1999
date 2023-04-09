import React from "react";
import { formatNumber } from "./../../../utils/format/index";
import "./style.css";

const RenderItemMenu = ({ addFoodToOrders, food }) => {
    const handleClick = () => {
        addFoodToOrders(food);
    };
    return (
        <div className="menu-item" onClick={handleClick}>
            <div className="image">
                {food.image ? (
                    <img src={food.image} alt={food.fName} />
                ) : (
                    <i className="bx bx-image bx-flip-horizontal bx-md"></i>
                )}
            </div>
            <div className="name">{food.fName}</div>
            <div className="price">{formatNumber(food.fPrice)}&nbsp;vnd</div>
        </div>
    );
};

function ListMenu({ lstMenu, addFoodToOrders }) {
    return (
        <div className="list-menu">
            {lstMenu.length !== 0 &&
                lstMenu.map((food, index) => (
                    <RenderItemMenu key={index} addFoodToOrders={addFoodToOrders} food={food} />
                ))}
        </div>
    );
}

export default ListMenu;
