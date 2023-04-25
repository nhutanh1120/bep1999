const db = require("./../config/db/index");
class Bill {
    constructor(params) {
        this.total = params?.total || 0;
        this.discount = params?.discount || null;
        this.unit = params?.unit || null;
        this.payments = params?.payments || null;
        this.status = params?.status || 0;
        this.isDeleted = params?.isDeleted || 0;
        this.createdAt = params?.createdAt || null;
        this.updatedAt = params?.updatedAt || null;
        this.fkUsersId = params?.fkUsersId;
    }

    async save() {
        const sql = `INSERT INTO bill (
                        total, 
                        discount, 
                        unit, 
                        payments, 
                        status, 
                        isDeleted, 
                        createdAt, 
                        updatedAt, 
                        fk_users_id
                    )
                    VALUES (?, ?, ?, ?, ?, 0, NOW(), NOW(), ?)`;
        let param = [this.total, this.discount, this.unit, this.payments, this.status, this.fkUsersId];
        return db.execute(sql, param);
    }

    static findAll() {
        const sql = "SELECT * FROM bill";
        return db.execute(sql);
    }
}

module.exports = Bill;
