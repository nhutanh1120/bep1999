import React, { useState, useEffect } from "react";
import ListTable from "./../components/table/listTable";
import CreateTable from "./../components/table/createTable";
import tablesAPI from "./../api/tablesAPI";
import TableDetail from "./../components/table/detail";
import "./../assets/css/tables.css";

function Tables() {
    const [listTable, setListTable] = useState([]);
    const [openDetail, setOpenDetail] = useState(null);
    const [openCreate, setOpenCreate] = useState(null);
    useEffect(() => {
        (async () => {
            const response = await tablesAPI.findAll();
            setListTable(response.data.lstTables);
        })();
    }, []);

    const requestCreateTable = (lstTable) => {
        setListTable((current) => [...current, ...lstTable]);
    };
    return (
        <div className="tables-page">
            <div className="tables-container">
                <ListTable listTable={listTable} setOpenCreate={setOpenCreate} setOpenDetail={setOpenDetail} />
            </div>
            <div className="tables-aside">
                <div className="tables-create">
                    <CreateTable requestCreateTable={requestCreateTable} open={openCreate} />
                </div>
                <div className="tables-detail">
                    <TableDetail open={openDetail} />
                </div>
            </div>
        </div>
    );
}

export default Tables;
