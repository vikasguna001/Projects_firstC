const ProjectResourceDetailModel = require("../../model/ProjectResourceDetailModel");

exports.ProjectResourceDetail_PostData = async function (req, res, next) {
    try {
      const ProjectResourceDetail_PostData = {
        ProjectId: req.body.ProjectId,
        RecourceId: req.body.RecourceId,
        CreateBy: req.body.CreateBy,
        ModifiedBy: req.body.ModifiedBy,
       
        
      };
      const ProjectResourceDetail_PostData_Data = await ProjectResourceDetailModel.create(
        ProjectResourceDetail_PostData
      );
      return res.status(201).json({
        status: "success",
        data: ProjectResourceDetail_PostData_Data,
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(404).json({
        status: "Error",
        error,
      });
    }
  };


  exports.ProjectResourceDetail_GetData = async function (req, res, next) {
    try {
      const ProjectResourceDetail_Getdata = await ProjectResourceDetailModel.find();
      return res.status(200).json({
        status: "success",
        data: ProjectResourceDetail_Getdata,
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(404).json({
        status: "Error",
        error,
      });
    }
  };
  

  exports.ProjectResourceDetail_DeleteData = async function (req, res, next) {
    try {
      await ProjectResourceDetailModel.findByIdAndDelete(req.params.id);
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
  
  exports.ProjectResourceDetail_FindData = async function (req, res, next) {
    try {
      const ProjectResourceDetail_FindData_Data = await ProjectResourceDetailModel.findById(req.params.id);
      return res.status(200).json({
        status: "success",
        data : ProjectResourceDetail_FindData_Data
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(204).json({
        status: "Error",
        error,
      });
    }
  };
  
  
  exports.ProjectResourceDetail_UpdateData = async function (req, res, next) {
  console.log(req.body);
    try {
      const ProjectResourceDetail_Data = await ProjectResourceDetailModel.findById(req.params.id);
      ProjectResourceDetail_Data.ProjectId = req.body.ProjectId;
      ProjectResourceDetail_Data.RecourceId = req.body.RecourceId;
      ProjectResourceDetail_Data.CreateBy = req.body.CreateBy;
      ProjectResourceDetail_Data.ModifiedBy = req.body.ModifiedBy;
    
      const ProjectResourceDetail_UpdateData_data = await ProjectResourceDetailModel.findByIdAndUpdate(req.params.id , ProjectResourceDetail_Data)
      return res.status(202).json({
        status: "success",
        data: ProjectResourceDetail_UpdateData_data,
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(404).json({
        status: "Error",
        error,
      });
    }
  };