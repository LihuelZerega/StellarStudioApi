const express = require('express');
const SoldProductController = require('../controllers/SoldProductController');

const router = express.Router();

router.post('/soldproducts', SoldProductController.createSoldProduct);
router.get('/soldproducts', SoldProductController.getAllSoldProducts);
router.get('/soldproducts/:id', SoldProductController.getSoldProductById);
router.put('/soldproducts/:id',  SoldProductController.updateSoldProduct);
router.delete('/soldproducts/:id', SoldProductController.deleteSoldProduct);

module.exports = router;
