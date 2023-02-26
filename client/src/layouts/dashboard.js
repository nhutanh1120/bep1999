import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar/dashboard";
import CopyRight from "./footer/copyright";
import sidebarCurrent from "./../assets/json/sidebar.json";
import menu from "./../assets/json/menu.json";
import "./../assets/css/layoutDashboard.css";

function DashBoardLayout({ children }) {
    return (
        <div className="App">
            <Sidebar sidebarCurrent={sidebarCurrent} />
            <article className="Container">
                <header className="Container-header">
                    <Navbar userMenu={menu} />
                </header>
                <section className="Container-section"></section>
                <footer className="App-footer">
                    <CopyRight isDashboard={true} />
                </footer>
            </article>
        </div>
    );
}

export default DashBoardLayout;
