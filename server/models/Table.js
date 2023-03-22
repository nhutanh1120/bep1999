const db = require("./../config/db/index");
class Table {
    constructor(params) {
        this.name = params.name || null;
        this.status = params.status || 0;
        this.isDeleted = params.isDeleted || 0;
        this.createdAt = params.createdAt || null;
        this.updatedAt = params.updatedAt || null;
    }

    async save() {
        const sql = `INSERT INTO table (
                        name, 
                        status, 
                        isDeleted,
                        createdAt, 
                        updatedAt
                    )
                    VALUES (?, ?, ?, NOW(), NOW())`;
        let param = [this.name, this.status, this.isDeleted];
        return db.execute(sql, param);
    }

    static findAll() {
        const sql = "SELECT * FROM table";
        return db.execute(sql);
    }

    static findOneById(id) {
        const sql = `SELECT table.id as tId, 
                            table.name as tName, 
                            table.status as tStatus, 
                            table.isDeleted as tIsDeleted, 
                            table.createdAt as tCreatedAt, 
                            table.updatedAt as tUpdatedAt
	                FROM table
	                WHERE id = ?`;
        return db.execute(sql, [id]);
    }
}

module.exports = Table;
