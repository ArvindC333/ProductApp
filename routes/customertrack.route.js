const express = require('express');
const router = express.Router();

const customertrack_controller = require('../controllers/customertrack.controller');


//post call for creating a product
router.post('/create', customertrack_controller.customertrack_create);
module.exports = router;