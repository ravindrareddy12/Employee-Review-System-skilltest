const express = require('express')
const router = express.Router()


const homePage = require('../controller/homePage')

router.get('/',homePage.home)
router.get('/admin-portal',homePage.readminLogin)
router.get('/employee-portal',homePage.employelogin)

router.use('/admin',require('./admin'))

router.use('/employee',require('./employee'))

module.exports=router