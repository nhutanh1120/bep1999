import React, { Fragment } from "react";

const renderContent = (food, key) => {
    return (
        <tr key={key}>
            <td>{key + 1}</td>
            <td>{food.fName}</td>
            <td>{food.fPrice}</td>
            <td>{food.fUpdatedAt}</td>
        </tr>
    );
};

function MenuBox(props) {
    return (
        <div className="menu-box">
            {props.lstMenu.length !== 0 ? (
                props.lstMenu.map((menu, index) => (
                    <Fragment key={index}>
                        <div className="header">
                            <h5>{menu.kofName}</h5>
                            <p>({menu.kofDescription})</p>
                        </div>
                        <div className="content">
                            {menu?.food && menu?.food?.length !== 0 && (
                                <table>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Tên món</th>
                                            <th>giá</th>
                                            <th>ngày cập nhật</th>
                                        </tr>
                                    </thead>
                                    <tbody>{menu.food.map((food, index) => renderContent(food, index))}</tbody>
                                </table>
                            )}
                        </div>
                    </Fragment>
                ))
            ) : (
                <>
                    <div className="header">
                        <h5>Thực đơn bếp 1999</h5>
                        <p>(Vui lòng chọn thực đơn)</p>
                    </div>
                    <div className="content"></div>
                </>
            )}
        </div>
    );
}

export default MenuBox;
