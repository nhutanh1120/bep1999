import React, { useState, useRef } from "react";
import "./style.css";

const Dropdown = (props) => {
    const [state, setState] = useState(false);
    const dropdown_content_el = useRef(null);

    const handleClick = () => {
        setState(true);
        dropdown_content_el.current.classList.toggle("active");
    };
    const handleClickOutside = () => {
        setState(false);
        dropdown_content_el.current.classList.remove("active");
    };

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={handleClick}>
                {props.icon && <i className={props.icon}></i>}
                {props.badge && <span className="dropdown-badge">{props.badge}</span>}
                {props.customToggle && props.customToggle()}
            </button>
            <div ref={dropdown_content_el} className="dropdown-content">
                {props.contentData &&
                    props.renderItems &&
                    props.contentData.map((item, index) => props.renderItems(item, index))}
                {props.renderFooter && <div className="dropdown-footer">{props.renderFooter()}</div>}
            </div>
            {state && <div className="outside" onClick={handleClickOutside}></div>}
        </div>
    );
};

export default Dropdown;
