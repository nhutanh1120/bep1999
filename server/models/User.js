const db = require("./../config/db/index");
class User {
    constructor(params) {
        this.username = params.username;
        this.password = params.password;
        this.name = params.name;
        this.phone = params.phone;
        this.role = params.role || 0;
        this.status = params.status || 1;
    }

    async save() {
        const sql = `INSERT INTO users(
                        username, 
                        password, 
                        name, 
                        phone, 
                        role, 
                        status, 
                        createdAt, 
                        updatedAt
                    )
                    VALUES (
                        '${this.username}', 
                        '${this.password}', 
                        '${this.name}', 
                        ${this.phone}, 
                        ${this.role}, 
                        ${this.status}, 
                        NOW(), 
                        NOW()
                    )`;
        return db.execute(sql);
    }

    static findIdByUsername(username) {
        const sql = `SELECT id
	                FROM users
	                WHERE username = '${username}'`;
        return db.execute(sql);
    }

    static findOneByUsername(username) {
        const sql = `SELECT *
	                FROM users
	                WHERE username = '${username}'`;
        return db.execute(sql);
    }
}

module.exports = User;
