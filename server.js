

const express = require('express')
const app = express();

//connect to mongo database
var {connectToDatabase} = require('./config/database')
connectToDatabase();

//use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.set('view engine', 'ejs')

//use routes
app.use(require('./controller/routes'));


// app.use((req, res)=>{
//     res.status(404).send('Trying to be smart BRO!!!!')
// })


app.listen('3000', ()=>{
    console.log(`Listening to port 3000`)
})