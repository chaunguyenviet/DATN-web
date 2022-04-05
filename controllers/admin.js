const adminService = require('../services/admin');

exports.getAll = async (email) => {
    let arr = await adminService.getAll(email);
    console.log(arr)
    return arr;
}

exports.getUserByEmail = async (email,password) => {
    const user = await adminService.getUserByEmail(email);
    if(!user){
        return null
    }
    const checkPass = user.password == password
    if(!checkPass){
        return null
    }
    return {email:user.email};
}

exports.createAdmin = async (email, password) => {
    await adminService.createAdmin(email, password);
}

exports.updatePassword = (email, new_password) => {
    adminService.updatePassword(email, new_password);
}

exports.updateRole = (email, role) => {
    adminService.updateRole(email, role);
}

exports.deleteAdmin = async (email) => {
    await adminService.deleteAdmin(email)
}