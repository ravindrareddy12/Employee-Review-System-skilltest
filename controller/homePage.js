module.exports.home = async (req,res)=>{
    return res.render('home')
}


module.exports.readminLogin = async (req,res)=>{
    return res.render('adminPortal')
}



module.exports.employelogin=async (req,res)=>{
    return res.render('employeeLogin')
}