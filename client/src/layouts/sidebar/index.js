import React, { useEffect } from "react";
import sidebarCurrent from "./../../assets/json/sidebar.json";
import { Link } from "react-router-dom";
import Logout from "./logout/index";
import "./style.css";

const menuBtnChange = (elmA, elmB) => {
    if (elmA.classList.contains("open")) {
        elmB.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
        elmB.classList.replace("bx-menu-alt-right", "bx-menu");
    }
};

const Sidebar = ({ user }) => {
    useEffect(() => {
        const sidebar = document.querySelector(".sidebar");
        const closeBtn = document.querySelector("#logo-close");
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
    return (
        <div className="sidebar">
            <div className="logo">
                <div className="logo-icon">
                    <i className="bx bxs-heart-circle"></i>
                </div>
                <div className="logo-name">
                    <span className="name">bếp 1999</span>
                </div>
                <div id="logo-close" className="logo-close">
                    <i className="bx bx-menu"></i>
                </div>
            </div>
            <ul className="sidebar-search">
                <li>
                    <i className="bx bx-search"></i>
                    <input type="text" placeholder="Tìm kiếm..." />
                    <span className="tooltip">Tìm kiếm</span>
                </li>
            </ul>
            <div className="sidebar-content">
                <ul className="sidebar-list">
                    {sidebarCurrent.map((item, index) => (
                        <li key={index}>
                            <Link to={item.link}>
                                <i className={item.icon}></i>
                                <span className="sidebar-name">{item.title}</span>
                            </Link>
                            <span className="tooltip">{item.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <Logout
                staffName={`${user?.surname || null} ${user?.forename || null}`}
                permission={user?.role !== 0 ? "quản lý" : "nhân viên"}
                avatar={user?.avatar}
            />
        </div>
    );
};

export default Sidebar;
