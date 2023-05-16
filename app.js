const express = require('express')
const app = express()
const port= 7777
const cookieParser = require('cookie-parser')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')

const db = require('./config/db')
const { urlencoded } = require('body-parser')

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())
app.use(express.static('./assests'))

app.use(expressLayouts)


app.set('view engine','ejs')
app.set('views','./views')

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.use('/',require('./routes'))

app.listen(port,function(err){
    if(err){
        console.log('err while connecting port')
    }
    console.log(`server is running on ${port}`)
})