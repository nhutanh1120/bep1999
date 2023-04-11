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
}

module.exports = OrderDetails;
