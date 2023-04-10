import React from "react";
import moment from "moment";

function Table({ data, setOpenDetail }) {
    const handleClick = () => {
        setOpenDetail(data);
    };
    return (
        <div className={data.tStatus === 0 ? "tables col l-2" : "tables active col l-2"} onClick={handleClick}>
            <h5>{`B.${data.tName}`}</h5>
            <p>{data.tStatus === 0 ? "trống" : moment(data.tUpdatedAt).fromNow()}</p>
        </div>
    );
}

export default Table;
