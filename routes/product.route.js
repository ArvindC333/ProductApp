const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

// get call for testing
router.get('/test', product_controller.test);
//post call for creating a product
router.post('/create', product_controller.product_create);
// get call for finding by id
router.get('/:id', product_controller.product_details);
// put call for updating information
router.put('/:id/update', product_controller.product_update);
// delete call for deleting information
router.delete('/:id/delete', product_controller.product_delete);
module.exports = router;
