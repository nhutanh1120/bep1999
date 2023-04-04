import React from "react";
import "./style.css";
import Table from "./table";

function ListTable({ listTable, setOpenCreate, setOpenDetail }) {
    const handleClick = () => {
        setOpenCreate(Math.random());
    };
    return (
        <div className="row no-gutters list-table">
            {listTable.length !== 0 &&
                listTable.map((table, index) => <Table key={index} data={table} setOpenDetail={setOpenDetail} />)}
            <div className="col l-2 tables" onClick={handleClick}>
                <h5>
                    <i className="bx bx-plus"></i>
                </h5>
                <p>thêm mới</p>
            </div>
        </div>
    );
}

export default ListTable;
