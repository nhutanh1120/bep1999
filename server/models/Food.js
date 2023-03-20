const db = require("./../config/db/index");
class Food {
    constructor(params) {
        this.name = params.fName || null;
        this.price = params.fPrice || null;
        this.description = params.fDescription || null;
        this.isDeleted = params.isDeleted || 0;
        this.createdAt = params.createdAt || null;
        this.updatedAt = params.updatedAt || null;
        this.kofId = params.kofId;
    }

    async save() {
        const sql = `INSERT INTO food (
                        name,
                        price,
                        description,
                        isDeleted,
                        createdAt, 
                        updatedAt, 
                        fk_kind_of_food_id
                    )
                    VALUES (?, ?, ?, ?, NOW(), NOW(), ?)`;
        let param = [this.name, this.price, this.description, this.isDeleted, this.kofId];
        return db.execute(sql, param);
    }

    static findAll() {
        const sql = "SELECT * FROM food";
        return db.execute(sql);
    }

    static findOneById(id) {
        const sql = `SELECT food.id as fId, 
                            food.name as fName, 
                            food.price as fPrice, 
                            food.description as fDescription, 
                            food.isDeleted as fIsDeleted, 
                            food.createdAt as fCreatedAt, 
                            food.updatedAt as fUpdatedAt,
                            food.fk_kind_of_food_id as kofId
	                FROM food
	                WHERE id = ?`;
        return db.execute(sql, [id]);
    }
}

module.exports = Food;
