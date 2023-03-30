import React, { useState, useEffect } from "react";
import tablesAPI from "./../../../api/tablesAPI";
import "./style.css";

function ListTable() {
    const [state, setState] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await tablesAPI.findAll();
            setState(response.data.lstTables);
        })();
    }, []);
    return (
        <div className="list-table row">
            {state.length !== 0 &&
                state.map((table, index) => (
                    <div key={index} className="tables col l-2">
                        <h5>{`B.${table.tName}`}</h5>
                        <p>{table.tStatus === 0 && "trống"}</p>
                    </div>
                ))}
            <div className="tables col l-2">
                <h5>
                    <i className="bx bx-plus"></i>
                </h5>
                <p>thêm mới</p>
            </div>
        </div>
    );
}

export default ListTable;
