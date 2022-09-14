const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');


dotEnv.config()

const app = express();

//Cors
app.use(cors());

// Request Payload Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res,next) =>{
    res.send('Hello from Node Server')
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`);
})

//Error Handler Middleware

app.use(function(err, req, res, next){
    console.error(err.stack)
    res.status(500).send({
        status: 500,
        message: err.message,
        body:{}
    });
})