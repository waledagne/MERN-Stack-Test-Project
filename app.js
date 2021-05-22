const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const employee = require('./routes/route');


const app = express();

//BODY PARSER
app.use(express.json());

app.use(cors());

// CONNECT DATABASE
   connectDB();

// MOUNT OUR ROUTE
    app.use('/api/employees',employee);

dotenv.config({path:'/config/config.env'});
const PORT = process.env.PORT || 3000

const server = app.listen(PORT,console.log(`server running on port ${PORT}`));

// TO HANDLE PROMISE REJECTION ERROR
process.on('unhandledRejection', (err,promise)=>{
    console.log(`Error ${err.message}`);
    server.close(()=>process.exit(1))
});