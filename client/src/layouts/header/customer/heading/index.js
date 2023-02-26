import React from "react";
import "./style.css";

function Heading({ toggleLogin }) {
    return (
        <div className="heading">
            <div className="heading-left">
                <div className="heading-sub">
                    <div className="heading-sub-icon bx-sm">
                        <i className="bx bx-time-five"></i>
                    </div>
                    <div className="heading-sub-content">Mở cửa: 7h -22h</div>
                </div>
            </div>
            <div className="heading-right" onClick={() => toggleLogin(true)}>
                đăng nhập
            </div>
        </div>
    );
}

export default Heading;
