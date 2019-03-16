const express = require('express');
const router = express.Router();

const customertrack_controller = require('../controllers/customertrack.controller');


//post call for creating a product
router.post('/create', customertrack_controller.customertrack_create);
//get call to find data by location
router.get('/bank/:banklocation', customertrack_controller.customertrack_details_banklocation);
//get call to find data by interaction
router.get('/toi/:typeofinter', customertrack_controller.customertrack_details_typeofinter);
//find by date range
router.get('/time/:sdate&:edate', customertrack_controller.customertrack_details_time);
module.exports = router