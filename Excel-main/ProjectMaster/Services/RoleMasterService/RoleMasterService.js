const RoleMasterModel = require("../../model/RoleMasterModel");


exports.RoleMaster_PostData = async function (req, res, next) {
    try {
      const Functional_PostData_Data = {
        Name: req.body.Name,
        IsActive: req.body.IsActive,
        CreateBy: req.body.CreateBy,
        ModifiedBy: req.body.ModifiedBy,
      };
      const RoleMaster_PostData_Data = await RoleMasterModel.create(
        Functional_PostData_Data
      );
      return res.status(201).json({
        status: "success",
        data: RoleMaster_PostData_Data,
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(404).json({
        status: "Error",
        error,
      });
    }
  };


  exports.RoleMaster_GetData = async function (req, res, next) {
    try {
      const RoleMaster_Getdata = await RoleMasterModel.find();
      return res.status(200).json({
        status: "success",
        data: RoleMaster_Getdata,
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(404).json({
        status: "Error",
        error,
      });
    }
  };
  

  exports.RoleMaster_DeleteData = async function (req, res, next) {
    try {
      await RoleMasterModel.findByIdAndDelete(req.params.id);
      return res.status(202).json({
        status: "success",
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(204).json({
        status: "Error",
        error,
      });
    }
  };
  
  exports.RoleMaster_FindData = async function (req, res, next) {
    try {
      const RoleMaster_FindData_Data = await RoleMasterModel.findById(req.params.id);
      return res.status(200).json({
        status: "success",
        data : RoleMaster_FindData_Data
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(204).json({
        status: "Error",
        error,
      });
    }
  };
  
  
  exports.RoleMaster_UpdateData = async function (req, res, next) {
  console.log(req.body);
    try {
      const Function_FindById_Data = await RoleMasterModel.findById(req.params.id);
      Function_FindById_Data.Name = req.body.Name;
      Function_FindById_Data.IsActive = req.body.IsActive;
      Function_FindById_Data.CreateBy = req.body.CreateBy;
      Function_FindById_Data.ModifiedBy = req.body.ModifiedBy;
  
    
      const RoleMaster_UpdateData_data = await RoleMasterModel.findByIdAndUpdate(req.params.id , Function_FindById_Data)
      return res.status(202).json({
        status: "success",
        data: RoleMaster_UpdateData_data,
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(404).json({
        status: "Error",
        error,
      });
    }
  };