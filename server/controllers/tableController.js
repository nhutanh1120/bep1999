const Table = require("./../models/Table");

const menuControllers = {
    // @Router post /api/table/find/all
    // @access private
    findAll: async (req, res) => {
        try {
            const [lstTables, _] = await Table.findAll();
            res.json({
                success: true,
                message: "get all menu success",
                lstTables: lstTables,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, message: "Internal server error." });
        }
    },
    // @Router post /api/table/quickly/create
    // @access private
    quicklyCreateTable: async (req, res) => {
        try {
            const { quantity } = req.body;
            if (!quantity) {
                return res.status(400).json({
                    status: false,
                    message: "Please fill in all fields.",
                });
            }
            const [name] = await Table.findLargestNameById();
            const arrTables = Array.from(Array(5), (x, index) => index + name[0].max + 1);
            const [resultField] = await Table.insertMany(arrTables);
            const [lstTables, _] = await Table.findManyById(resultField.insertId, resultField.affectedRows);
            res.json({
                status: true,
                message: "Tables create successfully.",
                lstTables: lstTables,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, message: "Internal server error." });
        }
    },
};

module.exports = menuControllers;
