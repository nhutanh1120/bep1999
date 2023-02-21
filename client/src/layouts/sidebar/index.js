import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./logout/index";
import "./style.css";

const Sidebar = ({ sidebarCurrent }) => {
    // const auth = useSelector((state) => state.auth);

    // const { user, isLogged, isAdmin } = auth;
    const isAdmin = true;
    const user = {
        avatar: "aa",
    };

    useEffect(() => {
        let sidebar = document.querySelector(".sidebar");
        let closeBtn = document.querySelector("#logo-close");
        let searchBtn = document.querySelector(".bx-search");

        const menuBtnChange = () => {
            if (sidebar.classList.contains("open")) {
                closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
            } else {
                closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
            }
        };
        closeBtn.onclick = () => {
            sidebar.classList.toggle("open");
            menuBtnChange();
        };
        searchBtn.onclick = () => {
            sidebar.classList.toggle("open");
            menuBtnChange();
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
            <ul className="sidebar-list">
                <li>
                    <i className="bx bx-search"></i>
                    <input type="text" placeholder="Tìm kiếm..." />
                    <span className="tooltip">Tìm kiếm</span>
                </li>
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
            <Logout fullname="nhut" permission={(isAdmin && "quản trị") || "nhân viên"} avatar={user.avatar} />
        </div>
    );
};

export default Sidebar;
