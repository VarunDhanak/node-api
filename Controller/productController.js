const productService = require('../Service/productService');
const constants = require('../Constant/index');



module.exports.createProduct = async (req, res) =>{
    let response = {...constants.defaultServerResponse}
    try{
        console.log('===', req.body);
        const responseFromService = await productService.createProductService(req.body);
        response.status = 200;
        response.body = responseFromService;
        response.message = constants.productMessage.PRODUCT_CREATED;
    }catch(error){
        console.log('Something Went Wrong: COntroller: CreateProduct', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}

module.exports.getAllProducts = async (req, res) =>{
    let response = {...constants.defaultServerResponse}
    try{
        console.log('===', req.body);
        const responseFromService = await productService.getAllProductsService(req.query);
        response.status = 200;
        response.body = responseFromService;
        response.message = constants.productMessage.PRODUCT_FETCHED;
    }catch(error){
        console.log('Something Went Wrong: COntroller: getAllProducts', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}



module.exports.getProductID = async (req, res) =>{
    let response = {...constants.defaultServerResponse}
    try{
        console.log('===', req.body);
        const responseFromService = await productService.getProductIDService(req.params);
        response.status = 200;
        response.body = responseFromService;
        response.message = constants.productMessage.PRODUCT_FETCHED;
    }catch(error){
        console.log('Something Went Wrong: COntroller: getAllProducts', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}


module.exports.updateProduct = async (req, res) =>{
    let response = {...constants.defaultServerResponse}
    try{
        console.log('===', req.body);
        const responseFromService = await productService.updatedProductService({
        id: req.params.id, 
        updatedInfo: req.body
        });

        response.status = 200;
        response.body = responseFromService;
        response.message = constants.productMessage.PRODUCT_UPDATED;
    }catch(error){
        console.log('Something Went Wrong: COntroller: updatedProducts', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}


module.exports.deleteProduct = async (req, res) =>{
    let response = {...constants.defaultServerResponse}
    try{
        console.log('===', req.body);
        const responseFromService = await productService.deleteProductService(req.params);
        console.log(responseFromService);

        response.status = 200;
        response.body = responseFromService;
        response.message = constants.productMessage.PRODUCT_DELETE;
    }catch(error){
        console.log('Something Went Wrong: COntroller: deleteProduct', error);
        response.message = error.message;
    }
    return res.status(response.status).send(response);
}



