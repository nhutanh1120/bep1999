import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { handleLogout } from "./../../sidebar/logout/handleLogout";
import Dropdown from "./dropdown";
import ThemeMenu from "./theme";
import "./style.css";

const profile = "";
const renderUserToggle = (user) => (
    <div className="navbar-profile-user">
        <div className="navbar-profile-user-image">
            <img
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = profile;
                }}
                src={user.image || profile}
                alt="img"
            />
        </div>
        <div className="navbar-profile-user-name">{user.display_name}</div>
    </div>
);

const renderUserMenu = (item, index) => (
    <Link to={item.path} key={index} onClick={item?.event ? handleLogout : () => true}>
        <div className="message-item message-item-center">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
);
const renderNotificationItem = (item, index) => (
    <div className="message-item" key={index}>
        <i className={item.icon}></i>
        <div className="message-item-content">
            <span>
                <b>{item.title}</b>&nbsp;
                {item.content}
            </span>
            <small>{moment(item.time).fromNow()}</small>
        </div>
    </div>
);
const menuBtnChange = (elmA, elmB) => {
    if (elmA.classList.contains("open")) {
        elmB.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        elmB.classList.replace("bx-menu-alt-right", "bx-menu");
    }
};

const Navbar = ({ userMenu }) => {
    useEffect(() => {
        const sidebar = document.querySelector(".sidebar");
        const closeBtn = document.querySelector(".dashboard-mobile");
        const searchBtn = document.querySelector(".bx-search");

        closeBtn.onclick = () => {
            sidebar.classList.toggle("open");
            menuBtnChange(sidebar, closeBtn);
        };
        searchBtn.onclick = () => {
            sidebar.classList.toggle("open");
            menuBtnChange(sidebar, searchBtn);
        };
    }, []);

    const [filter, setFilter] = useState([]);

    let user;
    let role;

    const curr_user = {
        display_name: "user.surname" + " " + "user.forename",
        image: "user.avatar",
    };

    const [message, setMessage] = useState([]);
    return (
        <div className="navbar">
            <div className="navbar-title">
                <h1>
                    <i className={role === 1 ? "bx bx-star bx-sm" : "bx bx-user"}></i>
                    &nbsp;{role === 1 ? "quản lý" : "nhân viên"}
                </h1>
            </div>
            <div className="dashboard-mobile">
                <i className="bx bx-menu bx-md"></i>
            </div>
            <div className="navbar-search">
                <div className="search-input">
                    <input type="text" placeholder="Tìm kiếm..." />

                    {filter.length === 0 ? <i className="bx bx-search"></i> : <i className="bx bx-x"></i>}
                </div>
                {typeof filter !== "string" && filter.length !== 0 && (
                    <div className="search-result">
                        {filter.slice(0, 15).map((item, index) => (
                            <Link to={"/" + item._id} key={index}>
                                <div>{item}</div>
                            </Link>
                        ))}
                    </div>
                )}
                {typeof filter == "string" && (
                    <div className="search-result search-none">
                        <div>{filter}</div>
                    </div>
                )}
            </div>
            <div className="navbar-profile">
                <div className="navbar-profile-item">
                    <Dropdown
                        icon="bx bx-bell bx-tada-hover"
                        badge={user?.message?.length || "0"}
                        contentData={message}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to="/">Xem tất cả</Link>}
                    />
                </div>
                <div className="navbar-profile-item">
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={userMenu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>
                <div className="navbar-profile-item">
                    <ThemeMenu />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
