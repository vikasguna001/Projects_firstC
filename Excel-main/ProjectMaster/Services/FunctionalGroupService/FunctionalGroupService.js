const FunctionalGroupModel = require("../../model/FunctionalGroupModel");


exports.FunctionalGroup_PostData = async function (req, res, next) {
    try {
      const Functional_PostData_Data = {
        BussinessUnitId: req.body.BussinessUnitId,
        Name: req.body.Name,
        CreateBy: req.body.CreateBy,
        ModifiedBy: req.body.ModifiedBy,
      };
      const FunctionalGroup_PostData_Data = await FunctionalGroupModel.create(
        Functional_PostData_Data
      );
      return res.status(201).json({
        status: "success",
        data: FunctionalGroup_PostData_Data,
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(404).json({
        status: "Error",
        error,
      });
    }
  };


  exports.FunctionalGroup_GetData = async function (req, res, next) {
    try {
      const FunctionalGroup_Getdata = await FunctionalGroupModel.find();
      return res.status(200).json({
        status: "success",
        data: FunctionalGroup_Getdata,
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(404).json({
        status: "Error",
        error,
      });
    }
  };
  

  exports.FunctionalGroup_DeleteData = async function (req, res, next) {
    try {
      await FunctionalGroupModel.findByIdAndDelete(req.params.id);
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
  
  exports.FunctionalGroup_FindData = async function (req, res, next) {
    try {
      const FunctionalGroup_FindData_Data = await FunctionalGroupModel.findById(req.params.id);
      return res.status(200).json({
        status: "success",
        data : FunctionalGroup_FindData_Data
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(204).json({
        status: "Error",
        error,
      });
    }
  };
  
  
  exports.FunctionalGroup_UpdateData = async function (req, res, next) {
  console.log(req.body);
    try {
      const Function_FindById_Data = await FunctionalGroupModel.findById(req.params.id);
      Function_FindById_Data.BussinessUnitId = req.body.BussinessUnitId;
      Function_FindById_Data.Name = req.body.Name;
      Function_FindById_Data.CreateBy = req.body.CreateBy;
      Function_FindById_Data.ModifiedBy = req.body.ModifiedBy;
  
    
      const FunctionalGroup_UpdateData_data = await FunctionalGroupModel.findByIdAndUpdate(req.params.id , Function_FindById_Data)
      return res.status(202).json({
        status: "success",
        data: FunctionalGroup_UpdateData_data,
      });
    } catch (error) {
      console.log("Catch Error " + error);
      return res.status(404).json({
        status: "Error",
        error,
      });
    }
  };