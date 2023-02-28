import React, { useState } from "react";
import "./style.css";

const initialState = {
    password: "",
    rptPassword: "",
    error: "",
};
function Password(props) {
    const [inputs, setInputs] = useState(initialState);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
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
                    value={inputs.password || ""}
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
                    value={inputs.rptPassword || ""}
                    className="form-control"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
export default Password;
