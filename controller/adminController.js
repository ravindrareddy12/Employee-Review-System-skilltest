const Admin = require('../models/adminSchema')
const Employee = require('../models/employeSchema')
const Admins = require('../models/adminCreationSchema')

module.exports.signinUser = async (req,res)=>{
    try{
    const existingEmail = await Admin.findOne({email:req.body.email})
    if(!existingEmail){
        return res.status(401).send("error finding user")
    }
    if(existingEmail.password!==req.body.password){
        return res.redirect('/admin/adminPage')
        
    }
   
    return res.redirect('/admin/adminPage')
    
  }catch(err){
    return res.status(500).send("internal server error")
  }
}


module.exports.adminHome = async (req,res)=>{
  return res.render('adminHomepage')
}

// module.exports.addEmployee = async (req,res)=>{
//   return res.render('newEmployee')
// }

module.exports.addEmployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.render('newEmployee', { employees: employees });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};



// Route to handle adding an employee
module.exports.createEmployee = async (req, res) => {
  try {
    const { name, email, performance, roles, reviews, password, confirm_password } = req.body;

    if (roles === 'admin') {
      const admin = new Admin({
        name,
        email,
        performance,
        reviews,
        password,
        confirm_password,
        adminField: 'some value' // Additional fields specific to the admin
      });

      await admin.save();
    } else {
      const employee = new Employee({
        name,
        email,
        performance,
        roles,
        reviews,
        password,
        confirm_password
      });

      await employee.save();
    }

    res.redirect('back');
  } catch (error) {
    console.error(error);
    res.redirect('/error');
  }
};



module.exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    return res.render('Employees', { employees: employees });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};

module.exports.editEmpid = async (req, res) => {
  try {
    const Employees = await Employee.findById(req.params.id);
    res.render('Employees', { employees: employees }); // Pass the employee object as { employee: employee }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};


module.exports.editEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, performance, roles, reviews } = req.body;

    if (roles === 'admin') {
      const admin = await Admin.findOneAndUpdate(
        { employee: id },
        { name, email, performance, reviews, adminField: 'some value' }, // Add adminField property
        { new: true, upsert: true } // Use upsert option to create a new admin if not found
      );
    } else {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        id,
        { name, email, performance, roles, reviews },
        { new: true }
      );
    }

    res.redirect('back');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

 // Assuming you have already required the necessary dependencies and defined your Employee model

// 

module.exports.delete = async function (request, response) {
  let id = request.query.id;
  try {
    await Employee.findByIdAndDelete(id);
    return response.redirect('back');
  } catch (err) {
    console.log("error in deletion");
    return response.status(500).send("Error in deletion"); // Or handle the error in an appropriate way
  }
}



