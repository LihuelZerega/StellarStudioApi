const { StellarStudioSoldProductModel, sequelize } = require('../db');

// Crear un nuevo producto vendido
const createSoldProduct = async (req, res) => {
  try {
    const soldProduct = await StellarStudioSoldProductModel.create(req.body);
    res.status(201).json(soldProduct);
  } catch (error) {
    console.error("Error creating SoldProduct:", error);
    res.status(500).json({ error: "An error occurred while creating the sold product" });
  }
};

// Obtener todos los productos vendidos
const getAllSoldProducts = async (req, res) => {
  try {
    const soldProducts = await StellarStudioSoldProductModel.findAll();
    res.status(200).json(soldProducts);
  } catch (error) {
    console.error("Error fetching SoldProducts:", error);
    res.status(500).json({ error: "An error occurred while fetching sold products" });
  }
};

// Obtener un producto vendido por ID
const getSoldProductById = async (req, res) => {
  try {
    const soldProduct = await StellarStudioSoldProductModel.findByPk(req.params.id);
    if (!soldProduct) {
      return res.status(404).json({ error: 'Sold Product not found' });
    }
    res.status(200).json(soldProduct);
  } catch (error) {
    console.error("Error fetching SoldProduct by ID:", error);
    res.status(500).json({ error: "An error occurred while fetching the sold product" });
  }
};

// Actualizar un producto vendido por ID
const updateSoldProduct = async (req, res) => {
  try {
    // Validar errores de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const [updated] = await StellarStudioSoldProductModel.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Sold Product not found' });
    }
    const updatedSoldProduct = await StellarStudioSoldProductModel.findByPk(req.params.id);
    res.status(200).json(updatedSoldProduct);
  } catch (error) {
    console.error("Error updating SoldProduct:", error);
    res.status(500).json({ error: "An error occurred while updating the sold product" });
  }
};

// Eliminar un producto vendido por ID
const deleteSoldProduct = async (req, res) => {
  try {
    const deleted = await StellarStudioSoldProductModel.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Sold Product not found' });
    }
    res.status(204).json();
  } catch (error) {
    console.error("Error deleting SoldProduct:", error);
    res.status(500).json({ error: "An error occurred while deleting the sold product" });
  }
};

module.exports = {
  createSoldProduct,
  getAllSoldProducts,
  getSoldProductById,
  updateSoldProduct,
  deleteSoldProduct
};