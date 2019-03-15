
const Product = require('../models/product.model');

//get call to test 
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

//post call to create new product
exports.product_create = function (req, res, next) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price,
            prodtype: req.body.prodtype 
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

//it finds by id
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};
// finds by id and then updates
exports.product_update = function (req, res) {
    Product.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};
// finds by id and then deletes
exports.product_delete = function (req, res) {
    Product.findOneAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};