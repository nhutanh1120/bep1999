const db = require("./../config/db/index");
class OrderDetails {
    constructor(params) {
        this.name = params.name || 0;
        this.quality = params.quality || null;
        this.unitPrice = params.unitPrice || null;
        this.fkBillId = params.fkBillId;
    }

    async save() {
        const sql = `INSERT INTO order_details (
                        name, 
                        quality, 
                        unit_price, 
                        fk_bill_id
                    )
                    VALUES (?, ?, ?, ?)`;
        let param = [this.name, this.quality, this.unitPrice, this.fkBillId];
        return db.execute(sql, param);
    }

    static findAll() {
        const sql = "SELECT * FROM order_details";
        return db.execute(sql);
    }

    static createListOrder(arrParam, idBill) {
        let sql = `INSERT INTO order_details (
                        id,
                        name,
                        quality,
                        unit_price,
                        fk_bill_id
        )
        VALUES`;
        let listParam = [];
        for (const param of arrParam) {
            sql = `${sql} (?, ?, ?, ?, ?),`;
            console.log(param);
            listParam = [...listParam, ...Object.values(param), idBill];
        }
        return db.execute(sql.slice(0, sql.length - 1), listParam);
    }
}

module.exports = OrderDetails;
