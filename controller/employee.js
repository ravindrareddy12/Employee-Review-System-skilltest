const Employee = require('../models/employeSchema')

module.exports.Emplopyees = async (req,res)=>{
    try{
    const existingEmail = await Employee.findOne({email:req.body.email})
    if(!existingEmail){
        return res.status(401).send("error finding user")
    }
    if(existingEmail.password!==req.body.password){
        return res.redirect('/signin')
        
    }
   
    return res.redirect('/employee/list-employees')
    
  }catch(err){
    return res.status(500).send("internal server error")
  }
}


module.exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    return res.render('employeelist', { employees: employees });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};

