const RecourceDetailModel = require("../../model/RecourceDetailModel");

exports.RecourceDetail_PostData = async function (req, res, next) {
    try {
      const RecourceDetail_PostData = {
        UserId: req.body.UserId,
        Name: req.body.Name,
        ApprovelCapacity: req.body.ApprovelCapacity,
        CommitedCapacity: req.body.CommitedCapacity,
        ResorcesCapacity: req.body.ResorcesCapacity,
        YearlyHour: req.body.YearlyHour,
        YearlyAllocation: req.body.YearlyAllocation,
        Notes: req.body.Notes,
        CreateBy: req.body.CreateBy,
        ModifiedBy: req.body.ModifiedBy,
        
      };
      const RecourceDetail_PostData_Data = await RecourceDetailModel.create(
        RecourceDetail_PostData
      );
      return res.status(201).json({
        status: "success",
        data: RecourceDetail_PostData_Data,
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(404).json({
        status: "Error",
        error,
      });
    }
  };


  exports.RecourceDetail_GetData = async function (req, res, next) {
    try {
      const RecourceDetail_Getdata = await RecourceDetailModel.find();
      return res.status(200).json({
        status: "success",
        data: RecourceDetail_Getdata,
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(404).json({
        status: "Error",
        error,
      });
    }
  };
  

  exports.RecourceDetail_DeleteData = async function (req, res, next) {
    try {
      await RecourceDetailModel.findByIdAndDelete(req.params.id);
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
  
  exports.RecourceDetail_FindData = async function (req, res, next) {
    try {
      const RecourceDetail_FindData_Data = await RecourceDetailModel.findById(req.params.id);
      return res.status(200).json({
        status: "success",
        data : RecourceDetail_FindData_Data
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(204).json({
        status: "Error",
        error,
      });
    }
  };
  
  
  exports.RecourceDetail_UpdateData = async function (req, res, next) {
  console.log(req.body);
    try {
      const RecourceDetail_Data = await RecourceDetailModel.findById(req.params.id);
      RecourceDetail_Data.UserId = req.body.UserId;
      RecourceDetail_Data.Name = req.body.Name;
      RecourceDetail_Data.CommitedCapacity = req.body.CommitedCapacity;
      RecourceDetail_Data.ApprovelCapacity = req.body.ApprovelCapacity;
      RecourceDetail_Data.ResorcesCapacity = req.body.ResorcesCapacity;
      RecourceDetail_Data.YearlyHour = req.body.YearlyHour;
      RecourceDetail_Data.YearlyAllocation = req.body.YearlyAllocation;
      RecourceDetail_Data.Notes = req.body.Notes;
      RecourceDetail_Data.CreateBy = req.body.CreateBy;
      RecourceDetail_Data.CommitedCapacity = req.body.CommitedCapacity;
    
      const RecourceDetail_UpdateData_data = await RecourceDetailModel.findByIdAndUpdate(req.params.id , RecourceDetail_Data)
      return res.status(202).json({
        status: "success",
        data: RecourceDetail_UpdateData_data,
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(404).json({
        status: "Error",
        error,
      });
    }
  };