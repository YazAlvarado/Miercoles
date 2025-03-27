const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
router.get("/items", (req, res) => res.json([{ id: 1, name: "Item 1" }]));
router.put("/items/:id", (req, res) => res.json({ message: "Actualizado" }));
router.delete("/items/:id", (req, res) => res.json({ message: "Eliminado" }));
router.post("/items", [body("name").isString().notEmpty()], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.status(201).json(req.body);
});

module.exports = router;
