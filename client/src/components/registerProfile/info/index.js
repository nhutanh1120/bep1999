import React from "react";
import "./style.css";

function Info(props) {
    const handleChange = (event) => {
        const { name, value } = event.target;
        props.setState({ ...props.state, [name]: value });
    };
    return (
        <div className="info-create">
            <div className="form-header">Vui lòng cập nhật thông tin!</div>
            <div className="form-group">
                <label htmlFor="forename" className="form-label">
                    họ
                </label>
                <input
                    type="text"
                    id="forename"
                    name="forename"
                    value={props.state.forename || ""}
                    className="form-control"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="surname" className="form-label">
                    tên
                </label>
                <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={props.state.surname || ""}
                    className="form-control"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="birthday" className="form-label">
                    sinh nhật
                </label>
                <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    value={props.state.birthday || ""}
                    className="form-control"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="rptPassword" className="form-label">
                    giới tính
                </label>
                <select name="male" className="form-control" onChange={handleChange}>
                    <option value=""></option>
                    <option value="0">nữ</option>
                    <option value="1">nam</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="phone" className="form-label">
                    số điện thoại
                </label>
                <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={props.state.phone || ""}
                    className="form-control"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="address" className="form-label">
                    địa chỉ
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={props.state.address || ""}
                    className="form-control"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description" className="form-label">
                    mô tả
                </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={props.state.description || ""}
                    className="form-control"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default Info;
