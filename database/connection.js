const mongoose = require('mongoose');

databaseConnection = () => {
    mongoose.connect(process.env.DB_URL)

}