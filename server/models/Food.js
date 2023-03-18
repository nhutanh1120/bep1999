const db = require("./../config/db/mysql/index");
class Food {
    constructor(params) {
        this.name = params.name || null;
        this.price = params.price || null;
        this.description = params.description || null;
        this.isDeleted = params.isDeleted || 0;
        this.createdAt = params.createdAt || null;
        this.updatedAt = params.updatedAt || null;
        this.fk_kind_of_food_id = params.kindOfFoodId;
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

    static findAll() {
        const sql = "SELECT * FROM food";
        return db.execute(sql);
    }
}

module.exports = Food;
