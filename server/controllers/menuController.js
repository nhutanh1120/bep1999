const KindOfFood = require("./../models/KindOfFood");
const Food = require("./../models/Food");

const menuControllers = {
    // @Router post /api/menu/find/all
    // @access private
    findAll: async (req, res) => {
        try {
            const [lstMenu, _] = await KindOfFood.findAllMenu();
            const response = [];
            lstMenu.map((menu) => {
                let food = [];
                const idx = response.findIndex((item) => menu.kofId === item.kofId);
                if (menu.fId) {
                    food.push({
                        fId: menu.fId,
                        fName: menu.fName,
                        fPrice: menu.fPrice,
                        fDescription: menu.fDescription,
                        fIsDeleted: menu.fIsDeleted,
                        fCreatedAt: menu.fCreatedAt,
                        fUpdatedAt: menu.fUpdatedAt,
                    });
                }
                if (idx === -1) {
                    response.push({
                        kofId: menu.kofId,
                        kofName: menu.kofName,
                        kofDescription: menu.kofDescription,
                        kofIsDeleted: menu.kofIsDeleted,
                        kofCreatedAt: menu.kofCreatedAt,
                        kofUpdatedAt: menu.kofUpdatedAt,
                        food: food,
                    });
                } else {
                    if (menu.fId) {
                        response[idx].food.push(food[0]);
                    }
                }
            });
            res.json({
                success: true,
                message: "get all menu success",
                menu: response,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, message: "Internal server error." });
        }
    },
    // @Router post /api/menu/kind/food/create
    // @access private
    createKindOfFood: async (req, res) => {
        try {
            const { name, description } = req.body;
            if (!name) {
                return res.status(400).json({
                    status: false,
                    message: "Please fill in all fields.",
                });
            }
            let newKindOfFood = new KindOfFood({ name, description });
            [newKindOfFood, _] = await newKindOfFood.save();
            [newKindOfFood, _] = await KindOfFood.findOneById(newKindOfFood.insertId);
            res.json({
                status: true,
                message: "Kind of food create successfully.",
                kindOfFood: newKindOfFood[0],
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, message: "Internal server error." });
        }
    },
    // @Router post /api/menu/food/create
    // @access private
    createFood: async (req, res) => {
        try {
            const { kofId, fName, fPrice, fDescription } = req.body;
            if (!kofId || !fName || !fPrice) {
                return res.status(400).json({
                    status: false,
                    message: "Please fill in all fields.",
                });
            }
            let newFood = new Food({ kofId, fName, fPrice, fDescription });
            [newFood, _] = await newFood.save();
            [newFood, _] = await Food.findOneById(newFood.insertId);
            res.json({
                status: true,
                message: "Food create successfully.",
                food: newFood[0],
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, message: "Internal server error." });
        }
    },
};

module.exports = menuControllers;
