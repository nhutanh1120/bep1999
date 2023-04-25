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
        const sql = `INSERT INTO tables (
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
        const sql = `SELECT tables.id as tId, 
                            tables.name as tName, 
                            tables.status as tStatus, 
                            tables.isDeleted as tIsDeleted, 
                            tables.createdAt as tCreatedAt, 
                            tables.updatedAt as tUpdatedAt
                    FROM tables
                    WHERE isDeleted = 0`;
        return db.execute(sql);
    }

    static findOneById(id) {
        const sql = `SELECT tables.id as tId, 
                            tables.name as tName, 
                            tables.status as tStatus, 
                            tables.isDeleted as tIsDeleted, 
                            tables.createdAt as tCreatedAt, 
                            tables.updatedAt as tUpdatedAt
	                FROM tables
	                WHERE id = ?
                    AND isDeleted = 0`;
        return db.execute(sql, [id]);
    }

    static insertMany(arrParam) {
        let sql = `INSERT INTO tables (
                        name, 
                        status, 
                        isDeleted, 
                        createdAt, 
                        updatedAt
                    )
                    VALUES`;
        for (const name of arrParam) {
            sql = `${sql} (?, 0, 0, NOW(), NOW()),`;
        }
        return db.execute(sql.slice(0, sql.length - 1), arrParam);
    }

    static findManyById(id, fieldCount) {
        const sql = `SELECT tables.id as tId, 
                            tables.name as tName, 
                            tables.status as tStatus, 
                            tables.isDeleted as tIsDeleted, 
                            tables.createdAt as tCreatedAt, 
                            tables.updatedAt as tUpdatedAt
	                FROM tables
	                WHERE id >= ?
                    AND isDeleted = 0
                    ORDER BY id 
                    LIMIT ?`;
        return db.execute(sql, [id, fieldCount]);
    }

    static findLargestNameById() {
        const sql = `SELECT MAX(CAST(name AS INT)) AS max
                    FROM TABLES
                    WHERE isDeleted = 0`;
        return db.execute(sql);
    }

    static updateStatusTable(id, status) {
        const sql = `UPDATE
                        tables
                    SET
                        status = ?
                    WHERE
                        id = ?`;
        return db.execute(sql, [id, status]);
    }
}

module.exports = Table;
