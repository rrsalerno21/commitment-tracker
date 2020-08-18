const router = require("express").Router();
const taskRoutes = require("./tasks");
const commitmentRoutes = require("./commitments");

router.use("/tasks", taskRoutes);
router.use("/commitments", commitmentRoutes);

module.exports = router;
