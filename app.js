const express = require('express');
const bodyParser = require('body-parser');

//product route
const product = require('./routes/product.route'); 
const customertrack = require('./routes/customertrack.route');
const app = express();

//conecting to mongo
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://appuser:shark5@shark-b8x9z.mongodb.net/productstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//body parser to parse incoming requests on json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// intialize the product calls
app.use('/products', product);
app.use('/customertrack', customertrack)

//listening port
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});