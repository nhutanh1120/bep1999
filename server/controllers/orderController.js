const Table = require("./../models/Table");
const OrderDetails = require("./../models/OrderDetails");
const Bill = require("../models/Bill");

const menuControllers = {
    // @Router post /api/order/table/:id
    // @access private
    createOrder: async (req, res) => {
        try {
            const { orders } = req.body;
            const newBill = new Bill({ fkUsersId: req.user.id });
            const [bill] = await newBill.save();
            await OrderDetails.createListOrder(orders, bill.insertId);
            await Table.updateStatusTable(req.params.id, 1);
            res.json({
                success: true,
                message: "Create order success.",
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, message: "Internal server error." });
        }
    },
};

module.exports = menuControllers;
