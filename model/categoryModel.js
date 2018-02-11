const mongoose = require('mongoose')


const subSubCategoryNameSchema = new mongoose.Schema({
    "SubSubCategoryName" : {
        type : String
    },
    "Products" : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Products'
        }
    ]
})

const subCategoryNameSchema = new mongoose.Schema({
    "SubCategoryName" : {
        type : String
    },
    "SubSubCategory" : [subSubCategoryNameSchema]
})


const categoryNameSchema = new mongoose.Schema({
    "CategoryName" : {
        type : String
    },
    "SubCategory" : [subCategoryNameSchema]
})

const categorySchema = new mongoose.Schema({
    "Category" : [categoryNameSchema]
})

const categoryModel = mongoose.model('Categories', categorySchema)

module.exports = {categoryModel};