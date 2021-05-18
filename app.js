const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const app = express();

// connect to database
connectDB();

dotenv.config({path:'/config/config.env'});
const PORT = process.env.PORT || 3000

const server = app.listen(PORT,console.log(`server running on port ${PORT}`));

// to handle promise rejection
process.on('unhandledRejection', (err,promise)=>{
    console.log(`Error ${err.message}`);
    server.close(()=>process.exit(1))
});