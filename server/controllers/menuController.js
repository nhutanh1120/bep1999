const KindOfFood = require("./../models/KindOfFood");

const menuControllers = {
    // @Router post /api/menu/find/all
    // @access private
    findAll: async (req, res) => {
        try {
            const [menu, _] = await KindOfFood.findAllMenu();
            console.log(menu);
            res.json({
                success: true,
                message: "read agricultural success",
                menu,
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
            newKindOfFood = await newKindOfFood.save();
            res.json({
                status: true,
                message: "Kind of food create successfully.",
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, message: "Internal server error." });
        }
    },
};

module.exports = menuControllers;
