const Employee = require('../models/Employee');

         // GET ALL EMPLOYEES

exports.getEmployees = async(req,res,next) => {
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

    // GET SINGLE EMPLOYEE

exports.getEmployee = async(req,res,next) => {
    try {

        const employee = await Employee.findById(req.params.id);

        res.status(200).json({
            success:true,
            data:employee
        });
    }

    catch (err) {

        res.status(400).json({
            success:false
        });
    }
};

     // CREATE AN EMPLOYEE

exports.createEmployees = async(req,res,next) =>{
        try {

            const employee = await Employee.create(req.body);

            res.status(201).json({
                success:true,
                data:employee
            });
        }
        catch (err) {

            res.status(400).json({
                success:false
            });
        }


};

     // UPDATE AN EMPLOYEE

exports.updateEmployee = async(req,res,next) =>{
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
        });
    }
    catch (err) {

        res.status(400).json({
            success:false
        });
    }
};

    // DELETE AN EMPLOYEE

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