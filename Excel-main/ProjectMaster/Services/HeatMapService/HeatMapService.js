const HeatMapModel = require("../../model/HeatMapModel");


exports.HeatMap_PostData = async function (req, res, next) {
    try {
      const Functional_PostData_Data = {
        ProjectId: req.body.ProjectId,
        UserId: req.body.UserId,
        Status: req.body.Status,
        ApprovedCommittedEffort: req.body.ApprovedCommittedEffort,
        CreateBy: req.body.CreateBy,
        ModifiedBy: req.body.ModifiedBy,
        ModifiedDate: req.body.ModifiedDate,
      };
      const HeatMap_PostData_Data = await HeatMapModel.create(
        Functional_PostData_Data
      );
      return res.status(201).json({
        status: "success",
        data: HeatMap_PostData_Data,
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(404).json({
        status: "Error",
        error,
      });
    }
  };


  exports.HeatMap_GetData = async function (req, res, next) {
    try {
      const HeatMap_Getdata = await HeatMapModel.find();
      return res.status(200).json({
        status: "success",
        data: HeatMap_Getdata,
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(404).json({
        status: "Error",
        error,
      });
    }
  };
  

  exports.HeatMap_DeleteData = async function (req, res, next) {
    try {
      await HeatMapModel.findByIdAndDelete(req.params.id);
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
  
  exports.HeatMap_FindData = async function (req, res, next) {
    try {
      const HeatMap_FindData_Data = await HeatMapModel.findById(req.params.id);
      return res.status(200).json({
        status: "success",
        data : HeatMap_FindData_Data
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(204).json({
        status: "Error",
        error,
      });
    }
  };
  
  
  exports.HeatMap_UpdateData = async function (req, res, next) {
  console.log(req.body);
    try {
      const Function_FindById_Data = await HeatMapModel.findById(req.params.id);
      Function_FindById_Data.ProjectId = req.body.ProjectId;
      Function_FindById_Data.UserId = req.body.UserId;
      Function_FindById_Data.Status = req.body.Status;
      Function_FindById_Data.ApprovedCommittedEffort = req.body.ApprovedCommittedEffort;
      Function_FindById_Data.CreateBy = req.body.CreateBy;
      Function_FindById_Data.ModifiedBy = req.body.ModifiedBy;
      Function_FindById_Data.ModifiedDate = req.body.ModifiedDate;

  
    
      const HeatMap_UpdateData_data = await HeatMapModel.findByIdAndUpdate(req.params.id , Function_FindById_Data)
      return res.status(202).json({
        status: "success",
        data: HeatMap_UpdateData_data,
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(404).json({
        status: "Error",
        error,
      });
    }
  };