import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CopyRight = (props) => {
    const year = new Date().getFullYear();
    return (
        <div className="footer-copyright">
            <div className={props.isDashboard ? "copyright dashboard" : "copyright customer"}>
                bản quyền thiết kế thuộc về&nbsp;
                <Link to="/" title="bếp 1999">
                    bếp 1999
                </Link>
                &nbsp;&copy;&nbsp;{year}
            </div>
        </div>
    );
};

export default CopyRight;
