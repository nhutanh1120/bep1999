import React from "react";
import "./style.css";

function DetailOrders() {
    return (
        <div className="detail-orders">
            <div className="order-header"></div>
            <div className="order-container">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>tên món</th>
                            <th>số lượng</th>
                            <th>đơn giá</th>
                            <th>thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="order-footer"></div>
        </div>
    );
}

export default DetailOrders;
