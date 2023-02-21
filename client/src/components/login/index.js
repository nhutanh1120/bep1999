import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { API_URL } from "./../../constants/api";
import { showErrorToast } from "./../utils/notification/message";
import { isEmpty, isLength } from "./../utils/validation/validation";
import { USERNAME_EMPTY, PASSWORD_EMPTY, PASSWORD_MIN } from "./../../constants/message";
import axios from "axios";
import "./style.css";

const renderMessageError = (id, message) => {
    const element = document.querySelector(`#${id}`);
    element.classList.add("focus");
    element.nextElementSibling.innerText = message;
};

const validateForm = (element) => {
    let status = true;
    if (element.target) {
        element = element.target;
    }
    switch (element.id) {
        case "username":
            if (isEmpty(element.value)) {
                renderMessageError(element.id, USERNAME_EMPTY);
                status = false;
            }
            break;
        case "password":
            if (isEmpty(element.value)) {
                renderMessageError(element.id, PASSWORD_EMPTY);
                status = false;
            } else if (isLength(element.value, 8)) {
                renderMessageError(element.id, PASSWORD_MIN);
                status = false;
            }
            break;
        default:
            break;
    }
    return status;
};

const initialState = {
    username: "",
    password: "",
    error: "",
};
function Login(props) {
    const [hidden, setHidden] = useState(true);
    const [user, setUser] = useState(initialState);
    const { username, password, error } = user;

    useEffect(() => {
        setUser(initialState);
        setHidden(true);
    }, [props]);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value, error: "" });
    };

    const handleSubmit = async () => {
        const elements = document.querySelectorAll(".login-form input");
        let status = true;
        elements.forEach((element) => {
            const success = validateForm(element);
            if (!success) {
                status = success;
            }
        });
        if (status) {
            try {
                const res = await axios.post(
                    API_URL + "/auth/login",
                    {
                        username,
                        password,
                    },
                    {
                        withCredentials: true,
                    },
                );
                if (res.data.status && !res.data.refresh_token) {
                    setUser({
                        ...user,
                        warning: Math.random(),
                    });
                    return;
                } else if (res.data.status) {
                    setUser({ ...user, error: "" });

                    return redirect("/dashboard");
                }
            } catch (error) {
                setUser({
                    ...user,
                    error: Math.random(),
                });
            }
        }
    };

    const handleInput = (e) => {
        e.target.classList.remove("focus");
        e.target.nextElementSibling.innerText = "";
    };

    const closeForm = () => {
        props.showLogin(false);
        const elements = document.querySelectorAll(".login-form input");
        elements.forEach((element) => {
            element.value = "";
            element.nextElementSibling.innerText = "";
            element.classList.remove("focus");
        });
    };

    useEffect(() => {
        if (error) {
            showErrorToast("Tài khoản hoặc mật khẩu không chính xác.");
        }
    }, [error]);
    return (
        <div className={(props.display && "login show") || "login"}>
            <div className="login-close" onClick={closeForm}>
                <i className="bx bx-x bx-md"></i>
            </div>
            <div className="login-form">
                <div className="login-form-header">Thông tin đăng nhập</div>
                <div className="login-form-content">
                    <div className="login-form-group">
                        <div className="form-label">
                            <label htmlFor="username">Tài khoản:</label>
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                onChange={handleChangeInput}
                                onBlur={validateForm}
                                onInput={handleInput}
                            />
                            <span className="login-form-error"></span>
                        </div>
                    </div>
                    <div className="login-form-group">
                        <div className="form-label">
                            <label htmlFor="password">Mật khẩu:</label>
                        </div>
                        <div className="form-control">
                            <input
                                type={hidden ? "password" : "text"}
                                id="password"
                                name="password"
                                onChange={handleChangeInput}
                                onBlur={validateForm}
                                onInput={handleInput}
                            />
                            <span className="login-form-error"></span>
                            <div className="login-hidden-password" onClick={() => setHidden(!hidden)}>
                                <i className={hidden ? "bx bxs-lock" : "bx bxs-lock-open"}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-form-submit">
                <button type="submit" onClick={handleSubmit}>
                    Đăng nhập
                </button>
            </div>
        </div>
    );
}

export default Login;