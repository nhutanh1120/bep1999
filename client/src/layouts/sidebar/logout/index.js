import React, { useState } from "react";
// import profile from "./../../../../../assets/img/profile.jpg";
import { handleLogout } from "./handleLogout";
const profile = "a";

const Logout = ({ staffName, permission, avatar }) => {
    const [state, setState] = useState(staffName);
    if (state.length > 18) {
        const name = state.slice(0, 15) + "...";
        setState(name);
    }
    return (
        <div className="sidebar-footer">
            <div className="profile">
                <img
                    // onError={(e) => {
                    //     e.target.onerror = null;
                    //     e.target.src = profile;
                    // }}
                    src={avatar || profile}
                    alt="avatar"
                />
                <div className="info">
                    <div className="inf-name">{state}</div>
                    <div className="inf-permission">{permission}</div>
                </div>
            </div>
            <div className="sidebar-logout" onClick={handleLogout}>
                <i className="bx bx-log-out"></i>
            </div>
        </div>
    );
};

export default Logout;
