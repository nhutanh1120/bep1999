import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import sidebarCurrent from "./../assets/json/sidebar.json";
import menu from "./../assets/json/menu.json";
import "./../assets/css/theme.css";

function DashBoardLayout({ children }) {
    return (
        <div className="App">
            <Sidebar sidebarCurrent={sidebarCurrent} />
            <section className="container">
                <Navbar userMenu={menu} />
            </section>
        </div>
    );
}

export default DashBoardLayout;
