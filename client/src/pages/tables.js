import React from "react";
import ListTable from "./../components/table/listTable";
import CreateTable from "./../components/table/createTable";
import "./../assets/css/tables.css";

function Tables() {
    return (
        <div className="tables">
            <div className="tables-container">
                <ListTable />
            </div>
            <div className="tables-aside">
                <div className="tables-create">
                    <CreateTable />
                </div>
            </div>
        </div>
    );
}

export default Tables;
