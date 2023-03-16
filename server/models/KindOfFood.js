const db = require("./../config/db/index");
class KindOfFood {
    constructor(params) {
        this.name = params.username || null;
        this.description = params.description || null;
        this.isDeleted = params.isDeleted || 0;
        this.createdAt = params.createdAt || null;
        this.updatedAt = params.updatedAt || null;
    }

    async save() {
        const sql = `INSERT INTO kind_of_food(
                        name, 
                        description, 
                        isDeleted,
                        createdAt, 
                        updatedAt
                    )
                    VALUES (?, ?, ?, NOW(), NOW())`;
        let param = [this.name, this.description, this.isDeleted];
        return db.execute(sql, param);
    }
}

module.exports = KindOfFood;
