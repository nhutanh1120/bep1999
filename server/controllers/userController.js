const userControllers = {
    // @Router post /api/auth/login
    // @access public
    login: async (req, res) => {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                return res.status(400).json({ status: 400, message: "Missing username or password." });
            }
            console.log(username, password);

            res.json({
                status: 200,
                message: "Login success.",
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: "Internal server error." });
        }
    },
};

module.exports = userControllers;
