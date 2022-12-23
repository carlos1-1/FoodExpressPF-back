const {User} = require('../db');
const { StatusCodes } = require("http-status-codes");

const postUser = async(email)=>{
    
    try {
        const newUser = await User.findOne({where: {email: email}});
        if(newUser) throw({reason:'Email direction is already created', status: StatusCodes.CONFLICT});
    } catch (error) {
        throw({reason: error.reason, status: error.status});
    }
};

module.exports = postUser;