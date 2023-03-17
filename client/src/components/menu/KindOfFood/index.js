import React, { useEffect, useState } from "react";
import { showSuccessToast, showErrorToast } from "./../../utils/notification/message";
import { isEmpty } from "./../../utils/validation/validation";
import { KIND_OF_FOOD_EMPTY } from "./../../../constants/message";
import { useDispatch, useSelector } from "react-redux";
import kindOfFoodAPI from "./../../../api/menuAPI";
import "./../../../assets/css/form.css";
import "./style.css";

const renderMessageError = (id, message) => {
    const element = document.querySelector(`#${id}`);
    element.classList.add("focus");
    element.nextElementSibling.innerText = message;
};

const validateForm = (element) => {
    if (isEmpty(element.target.value)) {
        renderMessageError(element.target.id, KIND_OF_FOOD_EMPTY);
    }
};

const initialState = {
    name: "",
    description: "",
    error: "",
};
function KindOfFood(props) {
    const token = useSelector((state) => state.token);
    const dispatch = useDispatch();
    const [kindOfFood, setKindOfFood] = useState(initialState);
    const { error } = kindOfFood;

    useEffect(() => {
        setKindOfFood(initialState);
    }, [props]);

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setKindOfFood({ ...kindOfFood, [name]: value, error: "" });
    };

    const handleSubmit = async () => {
        const element = document.querySelector("#name");
        if (isEmpty(element.value)) {
            renderMessageError(element.id, KIND_OF_FOOD_EMPTY);
            return;
        }
        try {
            const res = await kindOfFoodAPI.createKindOfFood(token, {
                name: kindOfFood.name,
                description: kindOfFood.description,
            });
            if (res.data.status) {
                setKindOfFood({
                    ...kindOfFood,
                    error: Math.random(),
                });
                showSuccessToast(`Loại món ăn '${kindOfFood.name}' thêm mới thành công.`);
            }
        } catch (error) {
            console.log(error);
            setKindOfFood({
                ...kindOfFood,
                error: Math.random(),
            });
        }
    };

    const handleInput = (e) => {
        e.target.classList.remove("focus");
        e.target.nextElementSibling.innerText = "";
    };

    const closeForm = () => {
        props.toggleDisplay(false);
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
            showErrorToast("Lỗi hệ thống, không tạo được loại món ăn.");
        }
    }, [error]);
    return (
        <div className={(props.display && "form show kind-of-food") || "form"}>
            <div className="form-close" onClick={closeForm}>
                <i className="bx bx-x bx-md"></i>
            </div>
            <div className="form-container">
                <div className="form-header">loại món ăn</div>
                <div className="form-content">
                    <div className="form-group flex-start">
                        <div className="form-label">
                            <label htmlFor="name">Tên loại món ăn:</label>
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                onChange={handleChangeInput}
                                onBlur={validateForm}
                                onInput={handleInput}
                            />
                            <span className="form-error"></span>
                        </div>
                    </div>
                    <div className="form-group flex-start">
                        <div className="form-label">
                            <label htmlFor="description">Mô tả:</label>
                        </div>
                        <div className="form-control">
                            <textarea
                                id="description"
                                name="description"
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

export default KindOfFood;