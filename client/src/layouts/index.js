import React from "react";
import Header from "./header/index";
import Login from "./../components/login";
import { useState } from "react";
import "./../components/utils/notification/message.css";
import "boxicons/css/boxicons.min.css";

function DefaultLayout({ children }) {
    const [state, setState] = useState(false);
    const handleLogin = (status) => {
        setState(status);
    };
    return (
        <div className="App">
            <header>
                <Header showLogin={handleLogin} />
            </header>
            <section>{children}</section>
            <footer></footer>
            <aside>
                <div id="toast"></div>
                <Login display={state} showLogin={handleLogin} />
            </aside>
        </div>
    );
}

export default DefaultLayout;
