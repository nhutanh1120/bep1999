import React, { Fragment, useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./../../utils/validation/validation";
import { TABLES_EMPTY, TABLES_QUICKLY_EMPTY } from "./../../../constants/message";
import { showSuccessToast, showErrorToast } from "./../../utils/notification/message";
import tablesAPI from "./../../../api/tablesAPI";
import "./style.css";

function CreateTable({ open, requestCreateTable }) {
    const content = useRef();
    const token = useSelector((state) => state.token);
    const [state, setState] = useState("");
    const [type, setType] = useState(true);

    useEffect(() => {
        if (open) {
            content.current.classList.add("active");
        }
    }, [open]);

    const handleCloseForm = () => {
        content.current.classList.remove("active");
    };

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

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            handleSubmit();
        }
    };

    const handleClick = (e) => {
        const element = document.querySelector("#tName");
        document.querySelector(".form-title.active").classList.remove("active");
        e.target.classList.add("active");
        element.classList.remove("focus");
        element.nextElementSibling.innerText = "";
        setState("");
        setType(!type);
    };

    const handleSubmit = async () => {
        if (isEmpty(state)) {
            const element = document.querySelector("#tName");
            element.classList.add("focus");
            element.nextElementSibling.innerText = type ? TABLES_EMPTY : TABLES_QUICKLY_EMPTY;
        } else {
            try {
                const res = type ? await tablesAPI.create(token, state) : await tablesAPI.quicklyCreate(token, state);
                if (res.data.status) {
                    const message = type ? `Bàn ${state} thêm mới thành công.` : `Đã thêm mới ${state} bàn thành công.`;
                    showSuccessToast(message);
                    requestCreateTable(res.data.lstTables);
                    setState("");
                }
            } catch (error) {
                showErrorToast("Lỗi hệ thống, không tạo được bàn mới.");
            }
        }
    };

    return (
        <Fragment>
            <div ref={content} className="table-create form-second" onKeyUp={handleKeyUp}>
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
                                <label htmlFor="tName">{type ? "Tên bàn" : "Số lượng bàn"}:</label>
                            </div>
                            <div className="form-control">
                                <input
                                    type={type ? "text" : "number"}
                                    id="tName"
                                    name="tName"
                                    value={state || ""}
                                    onChange={handleChange}
                                    onBlur={validateForm}
                                    onInput={handleInput}
                                    min={type ? "" : 1}
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
            <div className="table-aside" onClick={handleCloseForm}></div>
        </Fragment>
    );
}

export default CreateTable;
