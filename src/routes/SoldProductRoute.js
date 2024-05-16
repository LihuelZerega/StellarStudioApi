const express = require('express');
const SoldProductController = require('../controllers/SoldProductController');
const { validateSoldProduct } = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/soldproducts', validateSoldProduct, SoldProductController.createSoldProduct);
router.get('/soldproducts', SoldProductController.getAllSoldProducts);
router.get('/soldproducts/:id', SoldProductController.getSoldProductById);
router.put('/soldproducts/:id', validateSoldProduct, SoldProductController.updateSoldProduct);
router.delete('/soldproducts/:id', SoldProductController.deleteSoldProduct);

module.exports = router;
