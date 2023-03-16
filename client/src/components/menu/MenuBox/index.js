import React from "react";

const renderContent = (food, key) => {
    return (
        <tr key={key}>
            <td>#</td>
            <td>{food.name}</td>
            <td>giá</td>
            <td>ngày cập nhật</td>
        </tr>
    );
};

function MenuBox(props) {
    return (
        <div className="menu-box">
            {props.lstMenu ? (
                props.lstMenu.map((menu, index) => (
                    <>
                        <div className="header" key={index}>
                            <h5>{menu.name}</h5>
                            <p>({menu.description})</p>
                        </div>
                        <div className="content">
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
                        </div>
                    </>
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
