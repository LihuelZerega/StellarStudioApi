const { body } = require('express-validator');

const validateSoldProduct = [
  body('email').isEmail().withMessage('Enter a valid email address'),
  body('webpagePrice').isFloat({ gt: 0 }).withMessage('Enter a valid webpage price'),
  body('domainPrice').isFloat({ gt: 0 }).withMessage('Enter a valid domain price'),
  body('emailPrice').isFloat({ gt: 0 }).withMessage('Enter a valid email price'),
];

module.exports = {
  validateSoldProduct
};
