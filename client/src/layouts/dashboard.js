import React from "react";
import Sidebar from "./sidebar";
import sidebarCurrent from "./../assets/json/sidebar.json";
import menu from "./../assets/json/menu.json";
import "./../assets/css/theme.css";

function DashBoardLayout({ children }) {
    return (
        <div className="App">
            <Sidebar sidebarCurrent={sidebarCurrent} />
            <section className="container"></section>
        </div>
    );
}

export default DashBoardLayout;
