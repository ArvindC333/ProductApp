const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customertrackSchema = new Schema({
    firstname: {type: String, required: true, max: 100},
    lastname: {type: String, required: true, max:100},
    email: {type: String, required: true, max:100},
    iscustomer: {type: Boolean, required: true},
    city: {type: String, required: true, max:100},
    zip: {type: Number, required: true},
    typeofinter: {type: String, required: true, enum: ['Loan','Business Account', 'Deposit','Withdrawl','New Account','General Enquiry']},
    lengthofinter: {type: Number, required: true},
    dateofinter: {type: Date, required: true, default: Date.now},
    additionalcoms: {type: String, required: true, max:1000},
    banklocation: {type: String, required: true, enum: ['BankNorth','BankEast','BankWest','BankSouth']},


    });

    module.exports = mongoose.model('customertrack', customertrackSchema);
