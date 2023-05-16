const express = require('express')
const router = express.Router()

const employeeController = require('../controller/employee')

router.post('/Login',employeeController.Emplopyees)


router.get('/list-employees',employeeController.getEmployees)

module.exports=router