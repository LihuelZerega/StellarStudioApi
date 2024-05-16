const express = require('express');
const soldProductController = require('../controllers/SoldProductController');
const router = express.Router();

// Definir las rutas y asociarlas con los métodos del controlador
router.post('/', soldProductController.createSoldProduct);
router.get('/', soldProductController.getAllSoldProducts);
router.get('/:id', soldProductController.getSoldProductById);
router.put('/:id', soldProductController.updateSoldProduct);
router.delete('/:id', soldProductController.deleteSoldProduct);

module.exports = router;
