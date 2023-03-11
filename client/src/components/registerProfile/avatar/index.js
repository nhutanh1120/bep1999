import React, { useState } from "react";
import getBase64 from "./../../utils/fileBase64";
import "./style.css";

function Avatar(props) {
    const [image, setImage] = useState(null);
    const handleChange = (e) => {
        const { files } = e.target;
        setImage(URL.createObjectURL(files[0]));
        getBase64(files[0]).then((fileBase64) => props.setState({ ...props.state, avatar: fileBase64 }));
    };

    const handleClick = () => {
        const fileElement = document.querySelector("#file");
        fileElement.click();
    };
    return (
        <div className="avatar">
            <div className="avatar-view">
                <img src={image} alt="avatar" />
            </div>
            <div className="avatar-form" onClick={handleClick}>
                <div className="avatar-upload">
                    <i className="bx bxs-cloud-upload bx-lg"></i>
                    <p className="avatar-upload-title">upload file</p>
                </div>
                <div className="form-group">
                    <input type="file" id="file" name="image" onChange={handleChange} hidden={true} />
                </div>
            </div>
        </div>
    );
}
export default Avatar;
