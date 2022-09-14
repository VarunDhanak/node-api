const express = require('express');
const router = express.Router();
const userController = require('../Controller/userContoller')
const joiSchemaValidation = require('../middleware/joiSchemaValidation')
const userSchema = require('../apiSchema/userSchema')


router.post('/signup', joiSchemaValidation.validateBody(userSchema.createUserSchema) , userController.signUp)
router.post('/login', joiSchemaValidation.validateBody(userSchema.login), userController.login)

module.exports = router