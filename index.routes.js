const router = require("express").Router();
const agentRoutes = require("./agent.routes");
const treasuryRoutes = require("./treasury.routes");

router.get("/health", (req, res) => {
  res.json({ status: "Autonomex operational" });
});

router.use("/agents", agentRoutes);
router.use("/treasury", treasuryRoutes);

module.exports = router;
