const express = require('express')
const router = express.Router()

const adminController = require('../controller/adminController')

router.post('/login',adminController.signinUser)
router.get('/adminPage',adminController.adminHome)
router.get('/new-employee',adminController.addEmployee)
router.post('/adding-Employee',adminController.createEmployee)
router.get('/Employee-List',adminController.getEmployees)
router.get('/editEmployee/:id',adminController.editEmpid)
router.post('/editEmployee/:id',adminController.editEmployee)

router.get('/del-employee', adminController.delete);

module.exports=router