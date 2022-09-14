const userService = require('../Service/userService');
const constants = require('../Constant/index');


module.exports.signUp = async (req, res) =>{
    let response = {...constants.defaultServerResponse}
    try{
        console.log('===', req.body);
        const responseFromService = await userService.signUpService(req.body);
        response.status = 200;
        response.body = responseFromService;
        response.message = constants.userMessage.USER_CREATED;
    }catch(error){
        console.log('Something Went Wrong: COntroller: signUp', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.login = async (req, res) =>{
    let response = {...constants.defaultServerResponse}
    try{
        console.log('===', req.body);
        const responseFromService = await userService.loginService(req.body);
        response.status = 200;
        response.body = responseFromService;
        response.message = constants.userMessage.LOGIN_SUCCESS;
    }catch(error){
        console.log('Something Went Wrong: COntroller: login', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}