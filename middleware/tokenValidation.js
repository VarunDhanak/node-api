const constants = require('../Constant/index');
const jwt = require('jsonwebtoken');

module.exports.validationToken = (req,res,next) => {
    let response = {...constants.databasemessage};

    try{
        if(!req.headers.authorization){
            throw new Error(constants.requestValidationMessage.TOKEN_MISSING);
        }
        console.log(req.headers.authorization.split('Bearer')[1].trim());
        const token = req.headers.authorization.split('Bearer')[1].trim();
        const decoded = jwt.verify(token, process.env.SECRET_KEY || 'my-secret-key');
        console.log('decoded', decoded)
        return next();
    }catch(error){
        console.log('Error', error);
        response.message = error.message
        response.status = 401
    }
    return res.status(response.status).send(response)
}