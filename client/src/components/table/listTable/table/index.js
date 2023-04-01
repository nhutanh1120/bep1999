import React from "react";

function Table({ data, setOpenDetail }) {
    const handleClick = () => {
        setOpenDetail(data.tId);
    };
    return (
        <div className="tables col l-2" onClick={handleClick}>
            <h5>{`B.${data.tName}`}</h5>
            <p>{data.tStatus === 0 && "trống"}</p>
        </div>
    );
}

export default Table;
