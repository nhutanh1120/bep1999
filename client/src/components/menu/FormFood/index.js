import React, { useEffect, useState } from "react";
import { showSuccessToast, showErrorToast } from "./../../utils/notification/message";
import { isEmpty, isMax } from "./../../utils/validation/validation";
import { KIND_OF_FOOD_SELECT, FOOD_EMPTY, FOOD_PRICE_EMPTY, FOOD_PRICE_MIN } from "./../../../constants/message";
import { useDispatch, useSelector } from "react-redux";
import menuAPI from "./../../../api/menuAPI";
import { dispatchCreateFood } from "./../../../redux/actions/menuAction";
import "./../../../assets/css/form.css";
import "./style.css";

const renderMessageError = (id, message) => {
    const element = document.querySelector(`#${id}`);
    element.classList.add("focus");
    element.nextElementSibling.innerText = message;
};

const validateForm = (element) => {
    if (element.target.id === "kofId" && isEmpty(element.target.value)) {
        renderMessageError("kofId", KIND_OF_FOOD_SELECT);
    }
    if (element.target.id === "fName" && isEmpty(element.target.value)) {
        renderMessageError("fName", FOOD_EMPTY);
    }
    if (element.target.id === "fPrice" && isEmpty(element.target.value)) {
        renderMessageError("fPrice", FOOD_PRICE_EMPTY);
    } else if (element.target.id === "fPrice" && isMax(element.target.value, 999)) {
        renderMessageError("fPrice", FOOD_PRICE_MIN);
    }
};

const initialState = {
    kofId: "",
    fName: "",
    fPrice: "",
    fDescription: "",
};
function FormFood(props) {
    const lstMenu = useSelector((state) => state.menu);
    const token = useSelector((state) => state.token);
    const dispatch = useDispatch();
    const [food, setFood] = useState(initialState);

    useEffect(() => {
        setFood(initialState);
    }, [props]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFood({ ...food, [name]: value });
    };

    const handleSubmit = async () => {
        let status = true;
        if (isEmpty(food.kofId)) {
            renderMessageError("kofId", KIND_OF_FOOD_SELECT);
            status = false;
        }
        if (isEmpty(food.fName)) {
            renderMessageError("fName", FOOD_EMPTY);
            status = false;
        }
        if (isEmpty(food.fPrice)) {
            renderMessageError("fPrice", FOOD_PRICE_EMPTY);
            status = false;
        } else if (isMax(food.fPrice, 999)) {
            renderMessageError("fPrice", FOOD_PRICE_MIN);
            status = false;
        }
        if (status) {
            try {
                const res = await menuAPI.createFood(token, food);
                if (res.data.status) {
                    dispatch(dispatchCreateFood(res.data));
                    showSuccessToast(`Món ăn '${food.fName}' thêm mới thành công.`);
                    setFood(initialState);
                }
            } catch (error) {
                showErrorToast("Lỗi hệ thống, không tạo được món ăn.");
            }
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

    const closeForm = () => {
        props.toggleDisplay(null);
        document.querySelector("#overlay").classList.remove("active");
        const lstElements = ["#kofId", "#fName", "#fPrice"];
        lstElements.forEach((id) => {
            const elm = document.querySelector(id);
            elm.nextElementSibling.innerText = "";
            elm.classList.remove("focus");
        });
    };

    return (
        <div className={(props.display === "food" && "form food show") || "form food"} onKeyUp={handleKeyUp}>
            <div className="form-close" onClick={closeForm}>
                <i className="bx bx-x bx-md"></i>
            </div>
            <div className="form-container">
                <div className="form-header">món ăn</div>
                <div className="form-content">
                    <div className="form-group flex-start">
                        <div className="form-label">
                            <label htmlFor="kofId">Loại món ăn:</label>
                        </div>
                        <div className="form-control">
                            <select
                                id="kofId"
                                name="kofId"
                                value={food.kofId || ""}
                                onChange={handleChange}
                                onBlur={validateForm}
                                onInput={handleInput}
                            >
                                <option value="" className="option"></option>
                                {lstMenu.map((menu, index) => (
                                    <option key={index} value={menu.kofId} className="option">
                                        {menu.kofName}
                                    </option>
                                ))}
                            </select>
                            <span className="form-error"></span>
                        </div>
                    </div>
                    <div className="form-group flex-start">
                        <div className="form-label">
                            <label htmlFor="fName">Tên món ăn:</label>
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                id="fName"
                                name="fName"
                                value={food.fName || ""}
                                onChange={handleChange}
                                onBlur={validateForm}
                                onInput={handleInput}
                            />
                            <span className="form-error"></span>
                        </div>
                    </div>
                    <div className="form-group flex-start">
                        <div className="form-label">
                            <label htmlFor="fPrice">Giá:</label>
                        </div>
                        <div className="form-control">
                            <input
                                type="number"
                                id="fPrice"
                                name="fPrice"
                                value={food.fPrice || ""}
                                onChange={handleChange}
                                onBlur={validateForm}
                                onInput={handleInput}
                            />
                            <span className="form-error"></span>
                        </div>
                    </div>
                    <div className="form-group flex-start">
                        <div className="form-label">
                            <label htmlFor="fDescription">Mô tả:</label>
                        </div>
                        <div className="form-control">
                            <textarea
                                id="fDescription"
                                name="fDescription"
                                value={food.fDescription || ""}
                                onChange={handleChange}
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

export default FormFood;
