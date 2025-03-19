const express = require("express");
const ProductController = require("../controllers/ProductController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getById);
router.post("/", authMiddleware, ProductController.create);
router.put("/:id", authMiddleware, ProductController.update);
router.delete("/:id", authMiddleware, ProductController.delete);

module.exports = router;
