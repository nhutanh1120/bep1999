import React from "react";
import Heading from "./header/customer/heading";
import Navbar from "./header/customer/navbar";
import HeadingContent from "./header/customer/content";
import Login from "./../components/login";
import CopyRight from "./footer/copyright/";
import { useState } from "react";
import "./../components/utils/notification/message.css";
import "./../assets/css/layoutDefault.css";
import "boxicons/css/boxicons.min.css";

function DefaultLayout({ children }) {
    const [state, setState] = useState(false);
    const toggleLogin = (status) => {
        setState(status);
        document.querySelector("#overlay").classList.add("active");
    };
    return (
        <div className="App">
            <header className="App-header">
                <Heading toggleLogin={toggleLogin} />
                <HeadingContent />
                <Navbar />
            </header>
            <article className="App-article">{children}</article>
            <footer className="App-footer">
                <CopyRight isDashboard={false} />
            </footer>
            <aside className="App-aside">
                <div id="toast"></div>
                <div id="overlay" className="overlay"></div>
                <Login display={state} toggleLogin={toggleLogin} />
            </aside>
        </div>
    );
}

export default DefaultLayout;
