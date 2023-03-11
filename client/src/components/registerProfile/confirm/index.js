import React from "react";
import { useSelector } from "react-redux";
import profileAPI from "./../../../api/profileAPI";

function Confirm(props) {
    const token = useSelector((state) => state.token);
    const handleClick = async () => {
        await profileAPI.update(token, props.state);
    };
    return (
        <div>
            Confirm
            <button onClick={handleClick}>confirm</button>
        </div>
    );
}

export default Confirm;
