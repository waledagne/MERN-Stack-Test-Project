const Employee = require('../models/Employee');

// Get all employees

exports.getEmployess = async(res,req,next) => {
    try {

        const employees =  await Employee.find();

        res.status(200).json({
            success:true,
            data:employees
        });

    }
     catch (err) {
        res.status(400).json({
            success:false
        });
    }
};

exports.getEmployee = async(res,req,next) => {
    try {
        const employee = await Employee.findById(req.params.id);

        res.status(200).json({
            success:true,
            data:employee
        })
    }

    catch (err) {
        res.status(400).json({
            success:false
        });
    }
};

exports.createEmployees = async(res,req,next) =>{
    try {
        const employee = Employee.create(req.body);

        res.status(200).json({
            success:true,
            data:employee
        })
    }
     catch (err) {
        res.status(400).json({
            success:false
        });
    }
};

exports.updateEmployee = async(res,req,next) =>{
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators:true
        });

        if(!employee){
            return res.status(400).json({
                success:false
            });
        }
        res.status(200).json({
            success:true,
            data:employee
        })
    }
    catch (err) {
        res.status(400).json({
            success:false
        });
    }
};

exports.deleteEmployee = async(req,res,next) =>{
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);

        if(!employee){
            return res.status(400).json({
                success:false
            });
        }
        res.status(200).json({
            success:true,
            data:{}
        });
    }
    catch (err) {
        res.status(400).json({
            success:false
        })
    }
};