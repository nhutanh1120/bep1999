import React, { useState } from "react";
import Password from "./../components/registerProfile/password";
import Avatar from "./../components/registerProfile/avatar";
import Confirm from "../components/registerProfile/confirm";
import Info from "../components/registerProfile/info";
import "./../assets/css/registerProfile.css";

const initialState = {
    password: null,
    rptPassword: null,
    forename: null,
    surname: null,
    male: null,
    birthday: null,
    address: null,
    phone: null,
    description: null,
    avatar: null,
};
function RegisterProfile() {
    const [currentStep, setCurrentStep] = useState(1);
    const [prev, setPrev] = useState(true);
    const [next, setNext] = useState(false);
    const [state, setState] = useState(initialState);

    const updateSteps = (e) => {
        const circles = document.querySelectorAll(".progress .circle"),
            progressBar = document.querySelector(".progress .indicator");

        const current = e.target.id === "next" ? currentStep + 1 : currentStep - 1;
        circles.forEach((circle, index) => {
            circle.classList[`${index < current ? "add" : "remove"}`]("active");
        });
        progressBar.style.width = `${((current - 1) / (circles.length - 1)) * 100}%`;

        if (current === circles.length) {
            setNext(true);
        } else if (current === 1) {
            setPrev(true);
        } else {
            setPrev(false);
            setNext(false);
        }
        setCurrentStep(current);
    };

    let validate = false;

    const renderSwitch = () => {
        let component;
        switch (currentStep) {
            case 1:
                component = <Password state={state} setState={setState} validate={validate} />;
                break;
            case 2:
                component = <Info state={state} setState={setState} />;
                break;
            case 3:
                component = <Avatar state={state} setState={setState} />;
                break;
            case 4:
                component = <Confirm state={state} setState={setState} />;
                break;
            default:
                component = <Password state={state} setState={setState} validate={validate} />;
                break;
        }
        return component;
    };

    return (
        <div className="profile-register">
            <div className="progress">
                <span className="circle active">1</span>
                <span className="circle">2</span>
                <span className="circle">3</span>
                <span className="circle">4</span>
                <div className="progress-bar">
                    <span className="indicator"></span>
                </div>
            </div>
            <div className="profile-content">{renderSwitch()}</div>
            <div className="steps">
                <button id="prev" disabled={prev} onClick={updateSteps}>
                    quay lại
                </button>
                <button id="next" disabled={next} onClick={updateSteps}>
                    tiếp tục
                </button>
            </div>
        </div>
    );
}

export default RegisterProfile;
