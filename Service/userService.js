const User = require('../database/Models/userModel')
const bcrypt =  require('bcrypt');
const constants = require('../Constant/index');
const {formatMongoData} = require('../Helper/dbhelper');
const jwt = require('jsonwebtoken');

module.exports.signUpService = async ({email, password}) =>{
    try{
        let user = await User.findOne({email:email})
        if (user){
            throw Error(constants.userMessage.DUPLICATE_EMAIL)
        }
        password = await bcrypt.hash(password, 12)
        let newUser = new User({email:email, password: password});
        let result = await newUser.save();


        return formatMongoData(result);
    }catch (error) {
        console.log('Something went wrong: Service: signUpService', error);
        throw new Error(error)
    }
}

module.exports.loginService = async ({email, password}) =>{
    try{
        let user = await User.findOne({email:email});
        if (!user){
            throw Error(constants.userMessage.USER_NOT_FOUND);
        }
        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid){
            throw Error(constants.userMessage.INVALID_PASSWORD);
        }

        const token = jwt.sign({id: user._id}, process.env.SECRET_KEY || 'my-secret-key', {expiresIn: '1d'});
        return {token:token}
        
    


    
    }catch (error) {
        console.log('Something went wrong: Service: signUpService', error);
        throw new Error(error)
    }
}

