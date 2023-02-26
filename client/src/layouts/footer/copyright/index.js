import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CopyRight = (props) => {
    const year = new Date().getFullYear();
    return (
        <div className="footer-copyright">
            <div className={props.isDashboard ? "copyright dashboard" : "copyright customer"}>
                Bản quyền thiết kế thuộc về&nbsp;
                <Link to="/" title="Bếp 1999">
                    Bếp 1999
                </Link>
                &nbsp;&copy;&nbsp;{year}
            </div>
        </div>
    );
};

export default CopyRight;
