import React, { useState } from "react";
import Password from "./../components/registerProfile/password";
import Avatar from "./../components/registerProfile/avatar";
import "./../assets/css/registerProfile.css";

function RegisterProfile() {
    const [currentStep, setCurrentStep] = useState(1);
    const [prev, setPrev] = useState(true);
    const [next, setNext] = useState(false);
    const [password, setPassword] = useState(null);

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
                component = <Password setPassword={setPassword} validate={validate} />;
                break;
            case 2:
                component = <div>2</div>;
                break;
            case 3:
                component = <div>3</div>;
                break;
            case 4:
                component = <Avatar />;
                break;
            default:
                component = <Password setPassword={setPassword} validate={validate} />;
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
