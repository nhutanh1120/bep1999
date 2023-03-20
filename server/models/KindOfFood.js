const db = require("./../config/db/index");
class KindOfFood {
    constructor(params) {
        this.name = params.name || null;
        this.description = params.description || null;
        this.isDeleted = params.isDeleted || 0;
        this.createdAt = params.createdAt || null;
        this.updatedAt = params.updatedAt || null;
    }

    async save() {
        const sql = `INSERT INTO kind_of_food (
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

    static findAll() {
        const sql = "SELECT * FROM users";
        return db.execute(sql);
    }

    static findAllMenu() {
        const sql = `SELECT kind_of_food.id as kofId, 
                            kind_of_food.name as kofName, 
                            kind_of_food.description as kofDescription, 
                            kind_of_food.isDeleted as kofIsDeleted, 
                            kind_of_food.createdAt as kofCreatedAt, 
                            kind_of_food.updatedAt as kofUpdatedAt,
		                    food.id as fId, 
                            food.name as fName, 
                            food.price as fPrice, 
                            food.description as fDescription, 
                            food.isDeleted as fIsDeleted, 
                            food.createdAt as fCreatedAt, 
                            food.updatedAt as fUpdatedAt 
                    FROM kind_of_food 
                    LEFT JOIN food 
                    ON kind_of_food.id = food.fk_kind_of_food_id
                    AND food.isDeleted = 0
                    WHERE kind_of_food.isDeleted = 0`;
        return db.execute(sql);
    }

    static findOneById(id) {
        const sql = `SELECT kind_of_food.id as kofId, 
                            kind_of_food.name as kofName, 
                            kind_of_food.description as kofDescription, 
                            kind_of_food.isDeleted as kofIsDeleted, 
                            kind_of_food.createdAt as kofCreatedAt, 
                            kind_of_food.updatedAt as kofUpdatedAt
	                FROM kind_of_food
	                WHERE id = ?`;
        return db.execute(sql, [id]);
    }
}

module.exports = KindOfFood;
