const express = require('express');
const router = express.Router();
const productController = require('../Controller/productController');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const productSchema = require('../apiSchema/productSchema');
const tokenValidation = require('../middleware/tokenValidation')


router.post('/', tokenValidation.validationToken, joiSchemaValidation.validateBody(productSchema.createProductSchema), productController.createProduct);

router.get('/:id', tokenValidation.validationToken, productController.getProductID)

router.put('/:id',tokenValidation.validationToken,  joiSchemaValidation.validateBody(productSchema.updateProductSchema), productController.updateProduct)

router.delete('/:id', tokenValidation.validationToken, productController.deleteProduct)

router.get('/',tokenValidation.validationToken, joiSchemaValidation.validateQueryParams(productSchema.getAllProductSchema), productController.getAllProducts);

module.exports = router