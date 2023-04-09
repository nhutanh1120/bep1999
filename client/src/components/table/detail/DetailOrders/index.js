import React from "react";
import "./style.css";

const RenderOrderItem = ({ index, item }) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td className="name">{item?.fName}</td>
            <td>{item?.quality}</td>
            <td>{item?.fPrice}</td>
            <td>{Number(item?.quality) * Number(item?.fPrice)}</td>
        </tr>
    );
};

function DetailOrders({ listOrders }) {
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
            <div className="order-footer"></div>
        </div>
    );
}

export default DetailOrders;
