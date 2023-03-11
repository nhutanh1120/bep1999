import React from "react";
import "./style.css";

function Password(props) {
    const handleChange = (event) => {
        const { name, value } = event.target;
        props.setState({ ...props.state, [name]: value });
    };
    return (
        <div className="password-create">
            <div className="form-header">Vui lòng chọn mật khẩu mới!</div>
            <div className="form-group">
                <label htmlFor="password" className="form-label">
                    mật khẩu
                </label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    value={props.state.password || ""}
                    className="form-control"
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="rptPassword" className="form-label">
                    nhập lại mật khẩu
                </label>
                <input
                    type="text"
                    id="rptPassword"
                    name="rptPassword"
                    value={props.state.rptPassword || ""}
                    className="form-control"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
export default Password;
