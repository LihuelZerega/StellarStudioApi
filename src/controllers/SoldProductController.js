const { SoldProduct } = require('../models/SoldProductModel');

// Crear un nuevo producto vendido
const createSoldProduct = async (req, res) => {
  try {
    const soldProduct = await SoldProduct.create(req.body);
    res.status(201).json(soldProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los productos vendidos
const getAllSoldProducts = async (req, res) => {
  try {
    const soldProducts = await SoldProduct.findAll();
    res.status(200).json(soldProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un producto vendido por ID
const getSoldProductById = async (req, res) => {
  try {
    const soldProduct = await SoldProduct.findByPk(req.params.id);
    if (!soldProduct) {
      return res.status(404).json({ error: 'Sold Product not found' });
    }
    res.status(200).json(soldProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un producto vendido por ID
const updateSoldProduct = async (req, res) => {
  try {
    const [updated] = await SoldProduct.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Sold Product not found' });
    }
    const updatedSoldProduct = await SoldProduct.findByPk(req.params.id);
    res.status(200).json(updatedSoldProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un producto vendido por ID
const deleteSoldProduct = async (req, res) => {
  try {
    const deleted = await SoldProduct.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Sold Product not found' });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSoldProduct,
  getAllSoldProducts,
  getSoldProductById,
  updateSoldProduct,
  deleteSoldProduct
};
