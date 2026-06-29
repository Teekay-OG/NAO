const express = require("express");

const {
  getRisks,
  getRisk,
  seedRisks,
} = require("../controllers/riskController");

const router = express.Router();

router.post("/seed", seedRisks);

router.get("/", getRisks);

router.get("/:id", getRisk);

module.exports = router;