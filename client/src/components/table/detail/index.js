import React, { useRef, useEffect } from "react";
import "./style.css";

function TableDetail({ open }) {
    const content = useRef();
    const handleCloseContent = () => {
        content.current.classList.add("close");
    };
    useEffect(() => {
        content.current.classList.remove("close");
    }, [open]);
    return (
        <div ref={content} className="detail-container close">
            <div className="content">
                <div className="content-close">
                    <div className="background-close" onClick={handleCloseContent}></div>
                    <div className="icon-close" onClick={handleCloseContent}>
                        <i className="bx bx-x bx-sm"></i>
                    </div>
                </div>
                {open}
            </div>
        </div>
    );
}

export default TableDetail;
