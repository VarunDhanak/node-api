const Product = require('../database/Models/productModel');
const {formatMongoData, checkObjectId} = require('../Helper/dbhelper');
const constants = require('../Constant/index')


module.exports.createProductService = async (serviceData) =>{
    try{
        let product = new Product({...serviceData});
        let result = await product.save();
        return formatMongoData(result);
    }catch (error) {
        console.log('Something went wrong: Service: CreateProduct', error);
        throw new Error(error)
    }
}

module.exports.getAllProductsService = async ({skip=0, limit=10}) =>{
    try{
        let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return formatMongoData(products);
    }catch (error) {
        console.log('Something went wrong: Service: getProducts', error);
        throw new Error(error)
    }
}

module.exports.getProductIDService = async ({ id }) =>{
    try{
        checkObjectId(id);

        let product = await Product.findById(id);
        
        if (!product){
            throw  Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(product);
    }catch (error) {
        console.log('Something went wrong: Service: getProductsId', error);
        throw new Error(error)
    }
}

module.exports.updatedProductService = async ({ id, updatedInfo }) =>{
    try{
        checkObjectId(id);

        let product = await Product.findOneAndUpdate(
            {_id:id},
            updatedInfo,
            {new:true}
            );
        
        if (!product){
            throw  Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(product);
    }catch (error) {
        console.log('Something went wrong: Service: updatedProduct', error);
        throw new Error(error)
    }
}

module.exports.deleteProductService = async ({ id }) =>{
    try{
        checkObjectId(id);

        let product = await Product.findByIdAndDelete(id);
        
        if (!product){
            throw  Error(constants.productMessage.PRODUCT_NOT_FOUND);
        }
        return formatMongoData(product);
    }catch (error) {
        console.log('Something went wrong: Service: deleteProducttService', error);
        throw new Error(error)
    }
}