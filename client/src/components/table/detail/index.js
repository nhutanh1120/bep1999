import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ListMenu from "./ListMenu";
import DetailOrders from "./DetailOrders";
import "./style.css";

function TableDetail({ open }) {
    const content = useRef();
    const lstMenu = useSelector((state) => state.menu);
    const [menuData, setMenuData] = useState([]);
    const [listOrders, setListOrders] = useState([]);
    const [total, setTotal] = useState(0);

    const pureTotal = () => {
        const sum = listOrders.reduce((accumulator, object) => {
            return accumulator + object.fPrice * object.quality;
        }, 0);
        setTotal(sum);
    };

    const handleCloseContent = () => {
        content.current.classList.add("close");
    };

    const addFoodToOrders = (data) => {
        if (listOrders.length === 0) {
            data.quality = 1;
            setListOrders([data]);
        } else {
            const idx = listOrders.findIndex((item) => item.fId === data.fId);
            if (idx === -1) {
                data.quality = 1;
                setListOrders([...listOrders, data]);
            } else {
                listOrders[idx].quality = listOrders[idx].quality + 1;
                setListOrders([...listOrders]);
            }
        }
        pureTotal();
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
                    <div className="grid">
                        <div className="row no-gutters">
                            <div className="col l-5 pl-15">
                                <div className="header-info">
                                    <div className="table-name">bàn&nbsp;{open?.tName}</div>
                                </div>
                            </div>
                            <div className="col l-7"></div>
                        </div>
                    </div>
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
                            <DetailOrders listOrders={listOrders} total={total} />
                        </div>
                        <div className="col l-7">
                            <ListMenu lstMenu={menuData} addFoodToOrders={addFoodToOrders} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableDetail;
