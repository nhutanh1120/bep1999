import React, { useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./../../utils/validation/validation";
import { TABLES_EMPTY } from "./../../../constants/message";
import { showSuccessToast, showErrorToast } from "./../../utils/notification/message";
import tablesAPI from "./../../../api/tablesAPI";
import "./style.css";

function CreateTable() {
    const token = useSelector((state) => state.token);
    const [state, setState] = useState("");
    const [isCreated, setIsCreated] = useState(true);

    const handleChange = (e) => {
        setState(e.target.value);
    };

    const validateForm = (element) => {
        if (isEmpty(element.target.value)) {
            const element = document.querySelector("#tName");
            element.classList.add("focus");
            element.nextElementSibling.innerText = TABLES_EMPTY;
        }
    };

    const handleInput = (e) => {
        e.target.classList.remove("focus");
        e.target.nextElementSibling.innerText = "";
    };

    const handleClick = (e) => {
        document.querySelector(".form-title.active").classList.remove("active");
        e.target.classList.add("active");
        setState("");
        setIsCreated(!isCreated);
    };

    const handleSubmit = async () => {
        if (isEmpty(state)) {
            const element = document.querySelector("#tName");
            element.classList.add("focus");
            element.nextElementSibling.innerText = TABLES_EMPTY;
        } else {
            try {
                const res = await tablesAPI.create(token, state);
                if (res.data.status) {
                    showSuccessToast(`Bàn '${state}' thêm mới thành công.`);
                }
            } catch (error) {
                showErrorToast("Lỗi hệ thống, không tạo được bàn mới.");
            }
        }
    };

    return (
        <div className="table-create form-second">
            <div className="form-container">
                <div className="form-header">
                    <div className="form-title active" onClick={handleClick}>
                        thêm bàn
                    </div>
                    <div className="form-title" onClick={handleClick}>
                        tạo nhanh
                    </div>
                </div>
                <div className="form-content">
                    <div className="form-group">
                        <div className="form-label">
                            <label htmlFor="tName">{isCreated ? "Tên bàn" : "Số lượng bàn"}:</label>
                        </div>
                        <div className="form-control">
                            <input
                                type={isCreated ? "text" : "number"}
                                id="tName"
                                name="tName"
                                value={state || ""}
                                onChange={handleChange}
                                onBlur={validateForm}
                                onInput={handleInput}
                            />
                            <span className="form-error"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-submit">
                <button type="submit" onClick={handleSubmit}>
                    thêm mới
                </button>
            </div>
        </div>
    );
}

export default CreateTable;
