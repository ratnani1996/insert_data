const express = require('express')
const router = express.Router();
const {SupplierModel} = require('../model/supplierModel');
const { productModel } = require('../model/productModel');
const { categoryModel } = require('../model/categoryModel');

router.get('/', (req, res)=>{
    res.render('supplier')
})

router.post('/input/supplier', (req, res)=>{
    var supplier = new SupplierModel({
        CompanyName : req.body.company_name,
        FirstName : req.body.first_name,
        MiddleName : req.body.middle_name,
        Lastname : req.body.last_name,
        Address_1 : req.body.address_1,
        City : req.body.city,
        State : req.body.state,
        Country : req.body.country,
        PostalCode : req.body.postalcode,
        Email : req.body.email,
        Password : req.body.password
    })
    supplier.save()
            .then((user)=>{
                res.redirect(`/input/product/${user._id}`)
            })
            .catch((err)=>{
                res.send(err);
            })
})


router.get('/input/product/:id', (req, res)=>{
    res.render('products');
})

// router.post('/input/product', (req, res)=>{
    // var product = new productModel({
    //     productName : req.body.productName,
    //     productDescription : req.body.productDescription,
    //     productAvailable : req.body.productAvailable,
    //     msrp : req.body.msrp,
    //     availableColor : req.body.availableColor,
    //     discountAvailable : req.body.discountAvailable,
    //     unitsInStock : req.body.unitsInStock,
    //     picture : req.body.picture,
    //     QuantityPerUnit : req.body.QuantityPerUnit,
    //     sizes : req.body.sizes,
    //     availableSizes : req.body.availableSizes
    // })

//     SupplierModel.findById('5a76cfb55ba6010a4c74da6a')
//                 .then((supplier)=>{
//                     product.supplierId.push(supplier);
//                     return categoryModel.findOne({'CategoryName' : req.body.CategoryName})
//                 })
//                 .then((category)=>{
//                     if(category){
//                         product.categoryID = category;
//                         return product.save();
//                     }
//                     else{
//                         var category = new categoryModel({
//                             CategoryName : req.body.CategoryName
//                         })
//                         product.categoryID = category;
//                         return Promise.all([product.save(), category.save()])
//                     }
//                 })
//                 .then(()=>{
//                     //  productModel.find()
//                     //             .populate({
//                     //                 path : 'supplierId',
//                     //                 model : 'Suppliers'
//                     //             })
//                     //             .populate({
//                     //                 path : 'categoryID',
//                     //                 model : 'Categories'
//                     //             })
//                     //             .then((products)=>{
//                     //                 res.send(products)
//                     //             })
//                     productModel.find()
//                                 .populate('supplierId', 'categoryID')
//                                 .then((products)=>{
//                                     res.send(product)
//                                 })
//                         // productModel.find()
//                         //             .populate('supplierID')
//                         //             .then((products)=>{
//                         //                 res.send(products)
//                         //             })
//                 //         productModel.find()
//                 //                     .then((products)=>{
//                 //                         res.send(products)
//                 //                     })
//                 })
    
// })

// router.post('/input/product', (req, res)=>{
    // var product = new productModel({
    //     productName : req.body.productName,
    //     productDescription : req.body.productDescription,
    //     productAvailable : req.body.productAvailable,
    //     msrp : req.body.msrp,
    //     availableColor : req.body.availableColor,
    //     discountAvailable : req.body.discountAvailable,
    //     unitsInStock : req.body.unitsInStock,
    //     picture : req.body.picture,
    //     QuantityPerUnit : req.body.QuantityPerUnit,
    //     sizes : req.body.sizes,
    //     availableSizes : req.body.availableSizes
    // })

//     SupplierModel.findById(`5a75f44e55070e2fe0260cfd`)
//                  .then((supplier)=>{
//                      product.supplierId.push(supplier);
//                      return categoryModel.findOne({'CategoryName' : req.body.CategoryName, 'SubCategory' : req.body.SubCategory, 'SubSubCategory' : req.body.SubSubCategory})
//                  })
//                  .then((category)=>{
//                      //if there is no element found with category name sub category or subsubcategory
//                      if(!category){
//                          //if there is no subsub category but might have a subcaegory
//                          return categoryModel.findOne({'CategoryName' : req.body.CategoryName, 'SubCategory' : req.body.SubCategory})
//                      }
//                      //if there is an element with categoryname and subcategory and subsub category
//                      else{
//                         console.log(`Himanshu Was here`)
//                         console.log(category)
//                         product.categoryID = category;
//                         product.save()
//                                .then((product)=>{
//                                    res.send(product);
//                                })
//                                .catch((err)=>{
//                                    console.log(err)
//                                })
//                        // product.save()
//                                 .then((product)=>{
//                                     productModel.find()
//                                                 .populate('supplierId')
//                                                 .populate('categoryID')
//                                                 .then((products)=>{
//                                                     res.send(products);
//                                                 })
//                                 })
//                      }
//                  })
//                  .then((category)=>{
//                      //there is no sub category but might have a category
//                      if(!category){
//                          return categoryModel.findOne({'CategoryName' : req.body.CategoryName})
//                      }
//                      //there is a category and a subcategory but not subsubcategory
//                      else{
//                          category.SubSubCategory.push(req.body.SubSubCategory);
//                          product.categoryID = category;
//                          Promise.all([product.save(), category.save()])
//                                 .then(()=>{
//                                     productModel.find()
//                                                 .populate('categoryID', 'supplierId')
//                                                 .then((products)=>{
//                                                     res.send(products);
//                                                 })
//                                 })
//                                 .catch((err)=>{
//                                     console.log(err)
//                                 })
//                      }

//                  })
//                  .then((category)=>{
//                      //there is no category and sub and subsub
//                      if(!category){
//                          var category = new categoryModel({
//                              CategoryName : req.body.CategoryName
//                          })
//                          category.SubCategory.push(req.body.SubCategory);
//                          category.SubSubCategory.push(req.body.SubSubCategory);
//                          product.categoryID = category;
//                          Promise.all([product.save(), category.save()])
//                                 .then(()=>{
//                                     productModel.find()
//                                                 .populate('supplierId')
//                                                 .populate('categoryID')
//                                                 .then((products)=>{
//                                                     res.send(products);
//                                                 })
//                                 })
//                      }
//                      //if we have a category but no sub category and no sub sub category
//                      else{
//                         category.SubCategory.push(req.body.SubCategory);
//                         category.SubSubCategory.push(req.body.SubSubCategory);
//                         product.categoryID = category;
//                         Prmoise.all([product.save(), category.save()])
//                                 .then(()=>{
//                                     productModel.find()
//                                                 .populate('categoryID', 'supplierID')
//                                                 .then((products)=>{
//                                                     res.send(products);
//                                                 })
//                                 })
//                      }
//                  })
//                  .catch((err)=>{
//                      res.send(err)
//                  })
// })


// router.post('/input/product', (req, res)=>{
    // var product = new productModel({
    //     productName : req.body.productName,
    //     productDescription : req.body.productDescription,
    //     productAvailable : req.body.productAvailable,
    //     msrp : req.body.msrp,
    //     availableColor : req.body.availableColor,
    //     discountAvailable : req.body.discountAvailable,
    //     unitsInStock : req.body.unitsInStock,
    //     picture : req.body.picture,
    //     QuantityPerUnit : req.body.QuantityPerUnit,
    //     sizes : req.body.sizes,
    //     availableSizes : req.body.availableSizes
    // })

//     SupplierModel.findById('5a75f44e55070e2fe0260cfd')
//                  .then((supplier)=>{
//                      product.supplierId = supplier;
//                      //if we have the category and sub category and sub sub category
//                      return categoryModel.findOne({'CategoryName' : req.body.CategoryName, 'SubCategory' : req.body.SubCategory, 'SubSubCategory' : req.body.SubSubCategory})
//                  })
//                  .then((category)=>{
//                      //if there might be a category and sub but not subsub category
//                      if(!category){
//                             return categoryModel.findOne({'CategoryName' : req.body.CategoryName, 'SubCategory' : req.body.SubCategory})
//                      }
//                      //if there is category and sub and sub sub category
//                      else{
//                          product.categoryID = category;
//                          product.save();
//                          productModel.find()
//                                     .then((products)=>{
//                                         res.send(products);
//                                     })
//                      }
//                  })
//                  .then((category)=>{
//                      //if there is a category but no sub category and no no subcategory
//                      if(!category){
//                         return categoryModel.findOne({'CategoryName' : req.body.CategoryName})
//                      }
//                      //if there is a category and a sub category but no subsub category
//                      else{

//                      }
//                  })
//                  .then((category)=>{
//                      //if there is no category no sub category and no sub sub category
//                      if(!category){
//                         var category = new categoryModel({
//                             CategoryName : req.body.CategoryName,
//                             SubCategory : req.body.SubCategory,
//                             SubSubCategory : req.body.SubSubCategory
//                         })
//                         product.categoryID = category;
//                         Promise.all([product.save(), category.save()])
//                                .then(()=>{
//                                    productModel.find()
//                                                .populate('categoryID')
//                                                .populate('supplierId')
//                                                .then((products)=>{
//                                                    res.send(products)
//                                                })
//                                })
//                      }
//                      //if there is a category but no sub category and no sub sub category
//                      else{
                        
//                      }
//                  })
//                  .catch((err)=>{
//                      res.send(err);
//                  })
// })


// router.post('/input/product', (req, res)=>{
//     var product = new productModel({
//         productName : req.body.productName,
//         productDescription : req.body.productDescription,
//         productAvailable : req.body.productAvailable,
//         msrp : req.body.msrp,
//         availableColor : req.body.availableColor,
//         discountAvailable : req.body.discountAvailable,
//         unitsInStock : req.body.unitsInStock,
//         picture : req.body.picture,
//         QuantityPerUnit : req.body.QuantityPerUnit,
//         sizes : req.body.sizes,
//         availableSizes : req.body.availableSizes
//     })

//     SupplierModel.findById('5a79cc7992260119b8b2bd88')
//                  .then((supplier)=>{
//                      product.supplierId.push(supplier);
//                      //first find the category
//                      return categoryModel.findOne({'CategoryName' : req.body.CategoryName})
//                  })
//                  .then((category)=>{
//                      //if there is no category then create a category and sub and subsub category
//                      if(!category){
//                          var category = new categoryModel({
//                              CategoryName  : req.body.CategoryName
//                          });
//                          category.SubCategory.push(req.body.SubCategory);
//                          category.SubSubCategory.push(req.body.SubSubCategory);
//                          product.categoryID = category;
//                          Promise.all([product.save(), category.save()])
//                                 .then(()=>{
//                                     productModel.find()
//                                                 .populate('supplierId')
//                                                 .populate('categoryID')
//                                                 .then((products)=>{
//                                                     res.send(products);
//                                                 })
//                                 })
//                      }
//                      //then find the sub category of the category
//                      else{
//                          return categoryModel.findOne({'CategoryName' : req.body.CategoryName, 'SubCategory' : req.body.SubCategory})
//                      }
//                  })
//                  .then((category)=>{
//                      //if sub category is missing and obviously the subsub category would also be missing
//                      if(!category){
//                          categoryModel.findOne({'CategoryName' : req.body.CategoryName})
//                                       .then((category)=>{
//                                           category.SubCategory.push(req.body.SubCategory);
//                                           category.SubSubCategory.push(req.body.SubSubCategory);
//                                           product.categoryID = category;
//                                           Promise.all([product.save(), category.save()])
//                                                 .then((products)=>{
//                                                     productModel.find()
//                                                                 .populate('supplierId')
//                                                                 .populate('categoryID')
//                                                                 .then((products)=>{
//                                                                     res.send(products);
//                                                                 })
//                                                 })
//                                       })
//                      }
//                      //else find the subsub category
//                      else{
//                          return categoryModel.findOne({'CategoryName' : req.body.CategoryName, 'SubCategory' : req.body.SubCategory, 'SubSubCategory' : req.body.SubSubCategory})
//                      }
//                  })
//                  .then((category)=>{
//                      //if there is no subsub category
//                      if(!category){
//                          categoryModel.findOne({'CategoryName' : req.body.CategoryName , 'SubCategory' : req.body.SubSubCategory})
//                                       .then((category)=>{
//                                           category.SubSubCategory.push(req.body.SubSubCategory);
//                                           product.categoryID = category;
//                                           Promise.all([product.save(), category.save()])
//                                                  .then(()=>{
//                                                      productModel.find()
//                                                                  .then((products)=>{
//                                                                      res.send(products);
//                                                                  })
//                                                  })
//                                       })
//                      }
//                      //else there is a category and subcategory and also subsub category
//                      else{
//                          product.categoryID = category;
//                          product.save()
//                                 .then((product)=>{
//                                     productModel.find()
//                                                 .populate('supplierId')
//                                                 .populate('categoryID')
//                                                 .then((products)=>{
//                                                     res.send(products);
//                                                 })
//                                 })
//                      }
//                  })
//                  .catch((err)=>{
//                      res.send(err);
//                  })
// })


// router.post('/input/product', (req, res)=>{
    // var product = new productModel({
    //     productName : req.body.productName,
    //     productDescription : req.body.productDescription,
    //     productAvailable : req.body.productAvailable,
    //     msrp : req.body.msrp,
    //     availableColor : req.body.availableColor,
    //     discountAvailable : req.body.discountAvailable,
    //     unitsInStock : req.body.unitsInStock,
    //     picture : req.body.picture,
    //     QuantityPerUnit : req.body.QuantityPerUnit,
    //     sizes : req.body.sizes,
    //     availableSizes : req.body.availableSizes
    // })

//     SupplierModel.findById('5a79cc7992260119b8b2bd88')
//                  .then((supplier)=>{
//                      product.supplierId.push(supplier);
//                      return categoryModel.findOne({'CategoryName' : req.body.CategoryName})
//                  })
//                  .then((category)=>{
//                      //if there is no category.. then there is no subcategory and also no subcateogy
//                      if(!category){
//                          var category = new categoryModel({
//                              CategoryName : req.body.CategoryName
//                          })
//                          category.SubCategory.push(req.body.SubCategory);
//                          category.SubSubCategory.push(req.body.SubSubCategory);
//                          product.categoryID = category;
//                          Promise.all([product.save(), category.save()])
//                                 .then(()=>{
//                                     productModel.find()
//                                                 .populate('supplierId')
//                                                 .populate('categoryID')
//                                                 .then((products)=>{
//                                                     res.send(products);
//                                                 })
//                                 })
//                      }
//                      //else if there is a category but no sub category and no sub sub cateogory
//                      else if(category.SubCategory.length == 0){
//                          category.SubCategory.push(req.body.SubCategory);
//                          category.SubSubCategory.push(req.body.SubSubCategory);
//                          product.categoryID = category;
//                          Promise.all([product.save(), category.save()])
//                                 .then(()=>{
//                                     productModel.find()
//                                                 .populate('supplierId')
//                                                 .populate('categoryID')
//                                                 .then((products)=>{
//                                                     res.send(products);
//                                                 })
//                                 })
//                      }
//                      //else if there is  a subcategory but no sub sub category
//                      else if(category.SubSubCategory.length == 0){
//                         category.SubSubCategory.push(req.body.SubSubCategory);
//                         product.categoryID = category;
//                         Promise.all([product.save(), category.save()])
//                                .then(()=>{
//                                    productModel.find()
//                                                .populate('supplierId')
//                                                .populate('categoryID')
//                                                .then((products)=>{
//                                                    res.send(products);
//                                                })
//                                })
//                      }
//                      //if there is a category and also sub category and also sub sub category
//                      else{
//                          product.categoryID = category;
//                          product.save()
//                                 .then((product)=>{
//                                     productModel.find()
//                                                 .populate('supplierId')
//                                                 .populate('categoryID')
//                                                 .then((products)=>{
//                                                     res.send(products);
//                                                 })
//                                 })
//                      }
//                  })
// })


router.post('/input/product', (req, res)=>{
    var product = new productModel({
        productName : req.body.productName,
        productDescription : req.body.productDescription,
        productAvailable : req.body.productAvailable,
        msrp : req.body.msrp,
        availableColor : req.body.availableColor,
        discountAvailable : req.body.discountAvailable,
        unitsInStock : req.body.unitsInStock,
        picture : req.body.picture,
        QuantityPerUnit : req.body.QuantityPerUnit,
        sizes : req.body.sizes,
        availableSizes : req.body.availableSizes
    })
    SupplierModel.findById(`5a83d45c597e1e29cce5ee50`)
                 .then((supplier)=>{
                     product.supplierId.push(supplier);
                     //first find the category
                     return categoryModel.findOne({"Category.CategoryName" : req.body.CategoryName})
                 })
                 .then((category)=>{
                     //if we have not found any category then there is no sub category and also no sub sub category
                     if(!category){
                         var category = new categoryModel({});
                         category.Category.push({
                             "CategoryName" : req.body.CategoryName
                         })
                         
                         category.Category[0].SubCategory.push({
                             "SubCategoryName" : req.body.SubCategory
                         })
                         category.Category[0].SubCategory[0].SubSubCategory.push({
                             "SubSubCategoryName" : req.body.SubSubCategory
                         })
                         category.Category[0].SubCategory[0].SubSubCategory[0].Products.push(product);
                         Promise.all([category.save(), product.save()])
                                .then(()=>{
                                    categoryModel.find()
                                                 .populate('Category.SubCategory.SubSubCategory.Products')
                                                 .then((categories)=>{
                                                     res.send(categories)
                                                 })
                                })
                                .catch((err)=>{
                                    res.send(err)
                                })
                     }
                     //else we have found a category now find the sub category
                     else{
                         return categoryModel.findOne({"Category.CategoryName" : req.body.CategoryName, "Category.SubCategory.SubCategoryName" : req.body.SubCategory})
                     }
                 })
                 .then((category)=>{
                     //there is a category but no subcategory and also no sub sub category
                     //yahan se kaam challoo kr deo kl yeh waala part na chal rha
                     if(!category){
                         categoryModel.findOne({"Category.CategoryName" : req.body.CategoryName})
                                      .then((category)=>{
                                          category.Category[0].SubCategory.push({
                                              "SubCategoryName" : req.body.SubCategory
                                          })
                                          category.Category[0].SubCategory[0].SubSubCategory.push({
                                              "SubSubCategoryName" : req.body.SubSubCategory
                                          })
                                          category.Category[0].SubCategory[0].SubSubCategory[0].Products.push(product);
                                          Promise.all([product.save(), category.save()])
                                                 .then(()=>{
                                                    categoryModel.find()
                                                                .populate('Category.SubCategory.SubSubCategory.Products')
                                                                .then((categories)=>{
                                                                    res.send(categories)
                                                                })
                                                 })
                                                 .catch((err)=>{
                                                     res.send(`Error hai bhaiya error hai uppar waale mein error hai`)
                                                 })
                                      })
                     }
                     //else there is a sub category too now find the sub sub category
                     else{
                         return categoryModel.findOne({"Category.CategoryName" : req.body.CategoryName, "Category.SubCategory.SubCategoryName" : req.body.SubCategory, "Category.SubCategory.SubSubCategory.SubSubCategoryName" : req.body.SubSubCategory})
                     }
                 })
                 .then((category)=>{
                     //if we have a category and a sub category but no sub sub category
                     if(!category){
                      categoryModel.findOne({"Category.CategoryName" : req.body.CategoryName,
                       "Category.CategoryName.SubCategoryName":req.body.CategoryName.SubCategoryName})
                        .then(category=>{
                          console.log(category);
                          category.Category[0].SubCategory[0].SubSubCategory.push({
                                              "SubSubCategoryName" : req.body.SubSubCategory
                                          });
                          category.Category[0].SubCategory[0].SubSubCategory[0].Products.push(product);
                          Promise.all([product.save(), category.save()])
                                                 .then(()=>{
                                                    categoryModel.find()
                                                                .populate('Category.SubCategory.SubSubCategory.Products')
                                                                .then((categories)=>{
                                                                    res.send(categories)
                                                                })
                                                 })
                                                 .catch((err)=>{
                                                     res.send(`Error hai bhaiya error hai uppar waale mein error hai`)
                                                 })
                        });
                     }
                     //else if there is also a category and a sub category and also sub sub category
            else{
                         category.Category[0].SubCategory[0].SubSubCategory[0].Products.push(product)
                         Promise.all([product.save(), category.save()])
                                .then(()=>{
                                    categoryModel.find()
                                                .populate('Category.SubCategory.SubSubCategory.Products')
                                                .then((categories)=>{
                                                    res.send(categories)
                                                })
                                })
                                .catch((err)=>{
                                    res.send(err)
                                })  
                     }
})
                 .catch((err)=>{
                     res.send("Error hai bhaiya error hai");
                     console.log(err);
                 })
})

module.exports = router;
