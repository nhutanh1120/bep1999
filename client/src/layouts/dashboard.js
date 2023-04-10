import React, { useEffect } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar/dashboard";
import CopyRight from "./footer/copyright";
import menu from "./../assets/json/menu.json";
import ScrollTop from "./scrollTop";
import kindOfFoodAPI from "./../api/menuAPI";
import { dispatchFindAllMenu } from "./../redux/actions/menuAction";
import { useDispatch } from "react-redux";
import "moment/locale/vi";
import "./../assets/css/grid.css";
import "./../assets/css/layoutDashboard.css";

function DashBoardLayout({ user, children }) {
    const dispatch = useDispatch();
    useEffect(() => {
        if (dispatch) {
            const getAllMenu = () => {
                return kindOfFoodAPI.findAllMenu().then((res) => {
                    dispatch(dispatchFindAllMenu(res.data));
                });
            };
            getAllMenu();
        }
    }, [dispatch]);
    return (
        <div className="App">
            <Sidebar user={user} />
            <article className="Container">
                <header className="Container-header">
                    <Navbar user={user} userMenu={menu} />
                </header>
                <section className="Container-section">{children}</section>
                <footer className="App-footer">
                    <CopyRight isDashboard={true} />
                </footer>
            </article>
            <aside className="App-aside">
                <div id="toast"></div>
                <div id="overlay" className="overlay"></div>
                <ScrollTop />
            </aside>
        </div>
    );
}

export default DashBoardLayout;
