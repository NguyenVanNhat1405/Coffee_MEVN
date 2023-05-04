const Coffee = require("../models/coffee");

const getAllCoffees = async (req, res) => {
  try {
    const coffees = await Coffee.find();
    res.json(coffees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCoffeeById = async (req, res) => {
  try {
    const coffee = await Coffee.findById(req.params.id);
    if (!coffee) {
      return res.status(404).json({ message: "Coffee not found" });
    }
    res.json(coffee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createCoffee = async (req, res) => {
  const coffee = new Coffee(req.body);
  try {
    await coffee.save();
    res
      .status(201)
      .json({ success: true, message: "Coffee created successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateCoffee = async (req, res) => {
  try {
    const coffee = await Coffee.findById(req.params.id);
    if (!coffee) {
      return res.status(404).json({ message: "Coffee not found" });
    }
    coffee.title = req.body.title;
    coffee.author = req.body.author;
    coffee.genre = req.body.genre;
    coffee.review = req.body.review;
    coffee.rating = req.body.rating;
    coffee.image = req.body.image;
    await book.save();
    res.json({ message: "Coffee updated successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteCoffee = async (req, res) => {
  try {
    const coffee = await Coffee.findById(req.params.id);
    if (!coffee) {
      return res.status(404).json({ message: "Coffee not found" });
    }
    await coffee.deleteOne();
    res.json({ message: "Coffee deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteAllCoffees = async (req, res) => {
  try {
    await Coffee.deleteMany({});
    res.json({ message: "All coffee deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllCoffees,
  getCoffeeById,
  createCoffee,
  updateCoffee,
  deleteCoffee,
  deleteAllCoffees,
};
