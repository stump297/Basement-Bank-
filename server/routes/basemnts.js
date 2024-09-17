// routes/basements.js
const express = require("express");
const router = express.Router();

// Get all basements
router.get("/", (req, res) => {
  res.json(basements);
});

// Get a specific basement by ID
router.get("/:id", (req, res) => {
  const basement = basements.find((b) => b.id === parseInt(req.params.id));
  if (!basement) return res.status(404).send("Basement not found");
  res.json(basement);
});

// Add a new basement
router.post("/", (req, res) => {
  const newBasement = {
    id: basements.length + 1,
    name: req.body.name,
    value: req.body.value,
  };
  basements.push(newBasement);
  res.status(201).json(newBasement);
});

// Update a basement's value
router.put("/:id", (req, res) => {
  const basement = basements.find((b) => b.id === parseInt(req.params.id));
  if (!basement) return res.status(404).send("Basement not found");
  basement.value = req.body.value;
  res.json(basement);
});

module.exports = router;
