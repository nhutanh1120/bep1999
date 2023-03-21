import React, { useEffect, useState } from "react";
import { showSuccessToast, showErrorToast } from "./../../utils/notification/message";
import { isEmpty, isLength, isMax } from "./../../utils/validation/validation";
import { KIND_OF_FOOD_EMPTY } from "./../../../constants/message";
import { useDispatch, useSelector } from "react-redux";
import menuAPI from "./../../../api/menuAPI";
import { dispatchCreateFood } from "./../../../redux/actions/menuAction";
import "./../../../assets/css/form.css";
import "./style.css";

const renderMessageError = (id, message) => {
    const element = document.querySelector(id);
    element.classList.add("focus");
    element.nextElementSibling.innerText = message;
};

const validateForm = (element) => {
    if (isEmpty(element.target.value)) {
        renderMessageError(element.target.id, KIND_OF_FOOD_EMPTY);
    }
};

const initialState = {
    kofId: "",
    fName: "",
    fPrice: "",
    fDescription: "",
    error: "",
};
function FormFood(props) {
    const lstMenu = useSelector((state) => state.menu);
    const token = useSelector((state) => state.token);
    const dispatch = useDispatch();
    const [food, setFood] = useState(initialState);
    const { error } = food;

    useEffect(() => {
        setFood(initialState);
    }, [props]);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFood({ ...food, [name]: value, error: "" });
    };

    const handleSubmit = async () => {
        let status = true;
        if (isEmpty(food.kofId)) {
            renderMessageError("#kofId", KIND_OF_FOOD_EMPTY);
            status = false;
        }
        if (isEmpty(food.fName)) {
            renderMessageError("#fName", KIND_OF_FOOD_EMPTY);
            status = false;
        } else if (isLength(food.fName, 5)) {
            renderMessageError("#fName", KIND_OF_FOOD_EMPTY);
            status = false;
        }
        if (isEmpty(food.fPrice)) {
            renderMessageError("#fPrice", KIND_OF_FOOD_EMPTY);
            status = false;
        } else if (isMax(food.fPrice, 999)) {
            renderMessageError("#fPrice", KIND_OF_FOOD_EMPTY);
            status = false;
        }
        if (status) {
            try {
                const res = await menuAPI.createFood(token, food);
                if (res.data.status) {
                    dispatch(dispatchCreateFood(res.data));
                    showSuccessToast(`Món ăn '${food.fName}' thêm mới thành công.`);
                }
            } catch (error) {
                setFood({
                    ...food,
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
        props.toggleDisplay(null);
        document.querySelector("#overlay").classList.remove("active");
        const lstElements = ["#kofId", "#fName", "#fPrice"];
        lstElements.forEach((id) => {
            const elm = document.querySelector(id);
            elm.nextElementSibling.innerText = "";
            elm.classList.remove("focus");
        });
    };

    useEffect(() => {
        if (error) {
            showErrorToast("Lỗi hệ thống, không tạo được món ăn.");
        }
    }, [error]);
    return (
        <div className={(props.display === "food" && "form food show") || "form food"}>
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
                            <select id="kofId" name="kofId" onChange={handleChangeInput}>
                                <option value=""></option>
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
                                onChange={handleChangeInput}
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
                                onChange={handleChangeInput}
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
                                onChange={handleChangeInput}
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
