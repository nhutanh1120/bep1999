import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Heading({ toggleLogin }) {
    const isLogin = localStorage.getItem("firstLogin");
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
            {isLogin ? (
                <Link to="/dashboard" className="heading-right">
                    quản lý
                </Link>
            ) : (
                <div className="heading-right" onClick={() => toggleLogin(true)}>
                    đăng nhập
                </div>
            )}
        </div>
    );
}

export default Heading;
