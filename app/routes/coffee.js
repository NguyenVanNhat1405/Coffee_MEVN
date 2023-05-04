const express = require("express");
const router = express.Router();
const coffeeController = require("../controllers/coffee");

router.get("/", coffeeController.getAllCoffees);
router.get("/:id", coffeeController.getCoffeeById);
router.post("/", coffeeController.createCoffee);
router.put("/:id", coffeeController.updateCoffee);
router.delete("/:id", coffeeController.deleteCoffee);
router.delete("/", coffeeController.deleteAllCoffees);

module.exports = router;
