const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    productAvailable:{
      type: Boolean,
      required: true
    },
    supplierId:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Suppliers'
    }],
    msrp: {
        type: Number,
        required: true
    },
    availableSizes: {
        type:Array,
        default:null
    },
    sizes:{
        type:Array,
        default:null
    },
    availableColor: {
        type: Array
    },
    QuantityPerUnit: {
        type: Number,
        required: true
    },
    discountAvailable: {
        type: Number,
        default:0
    },
    unitsInStock:{
      type:Number,
      required:true,
      default:0
    },
    picture: {
        type: String,
        required: true
    }
});

const productModel = mongoose.model('Products', productSchema);

module.exports = { productModel };
