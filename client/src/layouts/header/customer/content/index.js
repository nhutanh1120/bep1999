import React from "react";
import "./style.css";

function HeadingContent() {
    return (
        <div className="heading-content">
            <div className="heading-content-logo"></div>
            <div className="heading-content-search">
                <div className="search">
                    <input type="text" placeholder="Hôm nay ăn gì?" />
                    <span className="search-icon">
                        <i className="bx bx-search bx-sm"></i>
                    </span>
                </div>
                <div className="search-result"></div>
            </div>
            <div className="heading-content-right"></div>
        </div>
    );
}

export default HeadingContent;
