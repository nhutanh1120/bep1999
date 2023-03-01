import React, { useState } from "react";
import getBase64 from "./../../utils/fileBase64";
import "./style.css";

const initialState = {
    img: "",
    fileBase64: "",
};
function Avatar(props) {
    const [state, setState] = useState(initialState);
    const handleChange = (e) => {
        const { name, files } = e.target;
        getBase64(files[0]).then((data) => setState({ [name]: URL.createObjectURL(files[0]), fileBase64: data }));
    };

    const handleClick = () => {
        const fileElement = document.querySelector("#file");
        fileElement.click();
    };
    return (
        <div className="avatar">
            <div className="avatar-view">
                <img src={state.img} alt="avatar" />
            </div>
            <div className="avatar-form" onClick={handleClick}>
                <div className="avatar-upload">
                    <i className="bx bxs-cloud-upload bx-lg"></i>
                    <p className="avatar-upload-title">upload file</p>
                </div>
                <div className="form-group">
                    <input type="file" id="file" name="img" onChange={handleChange} hidden="true" />
                </div>
            </div>
        </div>
    );
}
export default Avatar;
