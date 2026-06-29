const express = require("express");

const {
  getMaterials,
  getMaterial,
  createMaterial,
  updateMaterial,
  deleteMaterial,
  seedMaterials,
} = require("../controllers/materialController");

const router = express.Router();

router.get("/", getMaterials);

router.post("/seed", seedMaterials);

router.get("/:id", getMaterial);

router.post("/", createMaterial);

router.patch("/:id", updateMaterial);

router.delete("/:id", deleteMaterial);

module.exports = router;