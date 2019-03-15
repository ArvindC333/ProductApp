const Customertrack = require('../models/customertrack.model');

//get call to test 
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

//post call to create new product
exports.customertrack_create = function (req, res, next) {
    let customertrack = new Customertrack(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            iscustomer: req.body.iscustomer,
            email: req.body.email, 
            city: req.body.city,
            zip: req.body.zip,
            typeofinter: req.body.typeofinter,
            lengthofinter: req.body.lengthofinter,
            additionalcoms: req.body.additionalcoms,
            banklocation: req.body.banklocation,
            empid: req.body.empid
        }
    );

    customertrack.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Customer Tracking Visit Created successfully')
    })
};

