import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ListMenu from "./ListMenu";
import DetailOrders from "./DetailOrders";
import "./style.css";

function TableDetail({ open }) {
    const content = useRef();
    const lstMenu = useSelector((state) => state.menu);
    const [menuData, setMenuData] = useState([]);
    const handleCloseContent = () => {
        content.current.classList.add("close");
    };

    useEffect(() => {
        if (open) {
            content.current.classList.remove("close");
        }
    }, [open]);

    useEffect(() => {
        if (lstMenu) {
            let dataSort = [];
            lstMenu.map((menu) => {
                return dataSort.push(...menu.food);
            });
            setMenuData(dataSort);
        }
    }, [lstMenu]);

    return (
        <div ref={content} className="detail-container close">
            <div className="content">
                <div className="content-header">
                    <div className="content-close">
                        <div className="background-close" onClick={handleCloseContent}></div>
                        <div className="icon-close" onClick={handleCloseContent}>
                            <i className="bx bx-x bx-sm"></i>
                        </div>
                    </div>
                </div>
                <div className="grid content-body">
                    <div className="row no-gutters">
                        <div className="col l-5">
                            <DetailOrders />
                        </div>
                        <div className="col l-7">
                            <ListMenu lstMenu={menuData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableDetail;
