const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Please Enter the Name of Employee']
    },

    gender: {
        type:String,
        required: true,
        enum:['male','female']
    },

    salary:{
        type:Number,
        required: true
    },
    dateOfBirth:{
        type: Date,

    }

});

module.exports = mongoose.model('Employee',EmployeeSchema);