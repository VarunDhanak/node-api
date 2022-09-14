module.exports = {
    defaultServerResponse: {
        status: 450,
        body: {},
        message: {}
    },
    productMessage:{
        PRODUCT_CREATED: 'Product Created Successfully',
        PRODUCT_FETCHED: 'Product Fetched Successfully',
        PRODUCT_NOT_FOUND: 'Product Not Found',
        PRODUCT_DELETE: 'Product Deleted Successfully',
        PRODUCT_UPDATED: 'Product Updated Successfully'
    },
    userMessage:{
        USER_CREATED: 'SignUp Is Successful',
        DUPLICATE_EMAIL: 'User already Exist With Given Email',
        LOGIN_SUCCESS: 'Login Successfull!',
        USER_NOT_FOUND: 'User not found',
        INVALID_PASSWORD: 'Invlaid Password'
    },
    requestValidationMessage:{
        BAD_REQUEST:"Invalid Fields",
        TOKEN_MISSING: "Token Is Missing"

    },
    databasemessage:{
        INVALID_ID: 'Invalid Id'
    }
}