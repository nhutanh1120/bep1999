import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { showErrorToast } from "./../utils/notification/message";
import { isEmpty, isLength } from "./../utils/validation/validation";
import { USERNAME_EMPTY, PASSWORD_EMPTY, PASSWORD_MIN } from "./../../constants/message";
import { useDispatch } from "react-redux";
import { dispatchLogin } from "./../../redux/actions/authAction";
import authAPI from "./../../api/authAPI";
import "./../../assets/css/form.css";
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
            } else if (isLength(element.value, 6)) {
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
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
                const res = await authAPI.login(username, password);
                if (!res.data.status && !res.data.token) {
                    setUser({
                        ...user,
                        error: Math.random(),
                    });
                } else if (res.data.status) {
                    closeForm();
                    setUser({ ...user, error: "" });
                    localStorage.setItem("firstLogin", true);
                    dispatch(dispatchLogin());
                    navigate("/dashboard", { replace: true });
                }
            } catch (error) {
                console.log(error);
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
        props.toggleLogin(false);
        document.querySelector("#hidden").classList.remove("active");
        const elements = document.querySelectorAll(".form-container input");
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
        <div className={(props.display && "form login show") || "form login"}>
            <div className="form-close" onClick={closeForm}>
                <i className="bx bx-x bx-md"></i>
            </div>
            <div className="form-container">
                <div className="form-header">Thông tin đăng nhập</div>
                <div className="form-content">
                    <div className="form-group">
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
                            <span className="form-error"></span>
                        </div>
                    </div>
                    <div className="form-group">
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
                            <span className="form-error"></span>
                            <div className="hidden-password" onClick={() => setHidden(!hidden)}>
                                <i className={hidden ? "bx bxs-lock" : "bx bxs-lock-open"}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-submit">
                <button type="submit" onClick={handleSubmit}>
                    đăng nhập
                </button>
            </div>
        </div>
    );
}

export default Login;
