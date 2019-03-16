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

//it finds by id
exports.customertrack_details_banklocation = function (req, res) {
    Customertrack.find({banklocation: req.params.banklocation}, function (err, custometrack) {
        if (err) return next(err);
        res.send(custometrack);
    })
};

//find by interactions
exports.customertrack_details_typeofinter = function (req, res) {
    Customertrack.find({typeofinter: req.params.typeofinter}, function (err, customertrack) {
        if (err) return next(err);
        res.send(customertrack);
    })
};

//find by date range
exports.customertrack_details_time = function (req, res) {
    Customertrack.find({dateofinter:{$gte: req.params.sdate, $lte: req.params.edate}}, function (err, customertrack) {
        if (err) return next(err);
        res.send(customertrack);
    })
};



