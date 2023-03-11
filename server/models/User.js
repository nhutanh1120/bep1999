const db = require("./../config/db/index");
class User {
    constructor(params) {
        this.username = params.username || null;
        this.password = params.password || null;
        this.forename = params.forename || null;
        this.surname = params.surname || null;
        this.male = params.male || null;
        this.birthday = params.birthday || null;
        this.address = params.address || null;
        this.phone = params.phone || null;
        this.description = params.description || null;
        this.avatar = params.description || null;
        this.role = params.role || 0;
        this.status = params.status || 1;
        this.isDeleted = params.isDeleted || 0;
        this.createdAt = params.createdAt || null;
        this.updatedAt = params.updatedAt || null;
    }

    async save() {
        const sql = `INSERT INTO users(
                        username, 
                        password, 
                        forename, 
                        surname, 
                        male, 
                        birthday, 
                        address, 
                        phone, 
                        description, 
                        avatar, 
                        role, 
                        status, 
                        isDeleted,
                        createdAt, 
                        updatedAt
                    )
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`;
        let param = [
            this.username,
            this.password,
            this.forename,
            this.surname,
            this.male,
            this.birthday,
            this.address,
            this.phone,
            this.description,
            this.avatar,
            this.role,
            this.status,
            this.isDeleted,
        ];
        return db.execute(sql, param);
    }

    static findIdByUsername(username) {
        const sql = `SELECT id
	                FROM users
	                WHERE username = ?`;
        return db.execute(sql, [username]);
    }

    static findById(id) {
        const sql = `SELECT *
	                FROM users
	                WHERE id = ?`;
        return db.execute(sql, [id]);
    }

    static findOneByUsername(username) {
        const sql = `SELECT *
	                FROM users
	                WHERE username = ?`;
        return db.execute(sql, [username]);
    }

    static findIdAndUpdate(id, params) {
        const sql = `UPDATE users
                        SET
                            forename = ?,
                            surname = ?,
                            male = ?,
                            birthday = ?,
                            address = ?,
                            phone = ?,
                            description = ?,
                            avatar = ?,
                            updatedAt = NOW()
                        WHERE id = ?`;
        const param = [
            params.forename,
            params.surname,
            params.male,
            params.birthday,
            params.address,
            params.phone,
            params.description,
            params.avatar,
            id,
        ];
        return db.execute(sql, param);
    }
}

module.exports = User;
