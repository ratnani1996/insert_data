const mongoose = require('mongoose')

const ordersSchema = new mongoose.Schema({
    customerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customers'
    },
    orderNumber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orderDetail'
    },
    paymentID: {
        type: String,
        required: true
    },
    supplierID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Suppliers'
    },
    salesTax: {
        type: String,
        default: 0
    },
    transactionStatus: {
        type: String,
        required: true
    },
    paymentDate: {
        type: String,
        required: true
    }
})

const orderModel = mongoose.model('Orders', ordersSchema)

module.exports = { orderModel };
