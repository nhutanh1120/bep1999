const User = require("./../models/User");

const userProfileControllers = {
    // @Router post /api/profile/info
    // @access private
    getUserInfo: async (req, res) => {
        try {
            const [user, _] = await User.findById(req.user.id);

            res.json({ status: true, message: "Get information success.", user });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, message: "Internal server error." });
        }
    },
    // @Router post /api/profile/update
    // @access private
    updateUser: async (req, res) => {
        try {
            const { forename, surname, phone, address, avatar, ...rest } = req.body;
            if (!forename || !surname || !phone || !address || !avatar) {
                return res.status(400).json({
                    status: false,
                    message: "Please fill all fields.",
                });
            }
            const newUser = {
                forename,
                surname,
                phone,
                address,
                avatar,
                ...rest,
            };
            const [result] = await User.findIdAndUpdate(req.user.id, newUser);
            if (result) res.json({ status: true, message: "Update Success." });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, message: "Internal server error." });
        }
    },
};

module.exports = userProfileControllers;
