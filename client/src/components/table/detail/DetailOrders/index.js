import React from "react";
import { formatNumber } from "./../../../utils/format/index";
import "./style.css";

const RenderOrderItem = ({ index, item }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td className="name text-left">{item?.fName}</td>
            <td>{item?.quality}</td>
            <td className="text-right">{formatNumber(item?.fPrice)}</td>
            <td className="text-right">{formatNumber(Number(item?.quality) * Number(item?.fPrice))}</td>
        </tr>
    );
};

function DetailOrders({ listOrders, total }) {
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
                        {listOrders.length !== 0 &&
                            listOrders.map((item, index) => <RenderOrderItem key={index} index={index} item={item} />)}
                    </tbody>
                </table>
            </div>
            <div className="order-footer">
                <span>{formatNumber(total)}&nbsp;vnd</span>&nbsp;
                <button>thanh toán</button>
            </div>
        </div>
    );
}

export default DetailOrders;
