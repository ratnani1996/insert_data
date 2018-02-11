const mongoose = require('mongoose')
const validator = require('validator')
const {customerModel} = require('./customerModel')
const bcrypt = require('bcryptjs')

const addressSchema = new mongoose.Schema({
    Address_1 :{
        type : String
    },
    City : {
        type : String
    },
    State : {
        type : String
    },
    Country : {
        type : String
    },
    PostalCode : {
        type : Number
    }
})


const supplierSchema = new mongoose.Schema({
    CompanyName : {
        type : String,
        required : true
    },
    FirstName : {
        type : String,
        required : true
    },
    MiddleName : {
        type : String
    },
    LastName : {
        type : String
    },
    Address : addressSchema,
    Email : {
        type : String,
        required : true,
        unique : true,
        validate : {
            validator : function(v){
                return validator.isEmail(v);
            },
            message : '{VALUE} is not a valid email'
        }

    },
    Password : {
        type : String,
        required : true,
        minlength : 6
    },
    //reference to customers who have purchased or ordered from this supplier
    customerID : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Customer'
    }]
})

//hash password
supplierSchema.pre('save', function(next){
    var user = this;
    if(!this.isModified('Password')){
        return next();
    }
    else{
        bcrypt.genSalt(10, (err, salt)=> {
            if(err){
                return next(err);
            }
            bcrypt.hash(this.Password, salt, function(err, hash) {
                user.Password = hash;
                return next();
            });
        });
    }
})

//password matching
supplierSchema.methods.ComparePassword = function ComparePassword(password){
    return bcrypt.compareSync(password, this.Password)
}


var SupplierModel = mongoose.model('Suppliers', supplierSchema);

module.exports = {SupplierModel};