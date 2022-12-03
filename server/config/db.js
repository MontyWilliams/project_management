const
    mongoose = require('mongoose');
    const connectDB = async () => {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MogoDB Connected Bru: ${conn.connection.host}`.red.underline.bold);
    }

module.exports = connectDB;
