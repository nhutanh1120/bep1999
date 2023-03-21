import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const mode_settings = [
    {
        id: "light",
        name: "Trắng",
        background: "light-background",
    },
    {
        id: "dark",
        name: "Đen",
        background: "dark-background",
    },
];

const color_settings = [
    {
        id: "blue",
        name: "Xanh",
        background: "blue-color",
    },
    {
        id: "red",
        name: "Đỏ",
        background: "red-color",
    },
    {
        id: "cyan",
        name: "Lục",
        background: "cyan-color",
    },
    {
        id: "green",
        name: "Xanh lá",
        background: "green-color",
    },
    {
        id: "orange",
        name: "Cam",
        background: "orange-color",
    },
];

const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener("mousedown", (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle("active");
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove("active");
            }
        }
    });
};

const ThemeMenu = () => {
    const menu_ref = useRef(null);
    const menu_toggle_ref = useRef(null);

    clickOutsideRef(menu_ref, menu_toggle_ref);
    const setActiveMenu = () => menu_ref.current.classList.add("active");
    const closeMenu = () => menu_ref.current.classList.remove("active");

    const [currMode, setCurrMode] = useState("light");
    const [currColor, setCurrColor] = useState("blue");

    const setMode = (mode) => {
        setCurrMode(mode.id);
        document.documentElement.setAttribute("data-theme", mode.id);
        localStorage.setItem("themeMode", mode.id);
    };

    const setColor = (color) => {
        setCurrColor(color.id);
        document.documentElement.setAttribute("data-color", color.id);
        localStorage.setItem("colorMode", color.id);
    };

    useEffect(() => {
        const currentTheme = localStorage.getItem("themeMode");
        const currentColor = localStorage.getItem("colorMode");
        if (currentTheme) {
            document.documentElement.setAttribute("data-theme", currentTheme);
            setCurrMode(currentTheme);
        }
        if (currentColor) {
            document.documentElement.setAttribute("data-color", currentColor);
            setCurrColor(currentColor);
        }
    }, []);

    return (
        <div className="dashboard-theme">
            <button ref={menu_toggle_ref} className="dropdown-toggle" onClick={() => setActiveMenu()}>
                <i className="bx bx-cog bx-spin-hover"></i>
            </button>
            <div ref={menu_ref} className="theme">
                <h4>Cài đặt chủ đề</h4>
                <button className="theme-close" onClick={() => closeMenu()}>
                    <i className="bx bx-x"></i>
                </button>
                <div className="theme-select">
                    <span>Chọn chế độ</span>
                    <ul className="mode-list">
                        {mode_settings.map((item, index) => (
                            <li key={index} onClick={() => setMode(item)}>
                                <div
                                    className={`mode-list-color ${item.background} ${
                                        item.id === currMode ? "active" : ""
                                    }`}
                                >
                                    <i className="bx bx-check"></i>
                                </div>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="theme-select">
                    <span>Chọn màu sắc</span>
                    <ul className="mode-list">
                        {color_settings.map((item, index) => (
                            <li key={index} onClick={() => setColor(item)}>
                                <div
                                    className={`mode-list-color ${item.background} ${
                                        item.id === currColor ? "active" : ""
                                    }`}
                                >
                                    <i className="bx bx-check"></i>
                                </div>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ThemeMenu;
