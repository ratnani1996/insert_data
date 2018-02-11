const mongoose = require('mongoose')

var connectToDatabase = ()=>{
    mongoose.Promise = global.Promise
    // var url = `mongodb://ratnani1996:123456@ds223578.mlab.com:23578/e-commerce`
    var url = `mongodb://localhost:27017/E-commerce`
    mongoose.connect(url)
    mongoose.connection
            .once('open', ()=>{console.log(`Connection to the database up and running`)})
            .on('error', (err)=>{console.log(err)})
}

module.exports = {connectToDatabase}

