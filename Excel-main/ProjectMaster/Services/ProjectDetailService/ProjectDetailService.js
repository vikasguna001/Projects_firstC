// const BusinessUnit = require("../../model/BusinessUnitModel");
const ProjectModel = require("../../model/ProjectModel");

// exports.insertBussenessUnitData = async function (req, res, next) {
//   try {
//     const data = await BusinessUnit.create(req.body);
//     return res.status(200).json({ status: "success", data: data });
//   } catch (error) {
//    // console.log("Catch Error " + error);
//     return res.status(404).json({
//         status: "Error",
//         error
//     });
//   }
// };

// exports.getBussenessUnitData = async function (req, res, next) {
//     try {
//         const data = await BusinessUnit.find();
//         res.status(201).json({ status: "success", data: data });
//       } catch (error) {
//         return res.status(404).json({
//             status: "Error",
//             error
//         });

//       }
//   };

exports.ProjectDetails_PostData = async function (req, res, next) {
  try {
    const Project_PostData_Data = {
        ResourceCount: req.body.ResourceCount,
        ProjectType: req.body.ProjectType,
        ProjectStatus: req.body.ProjectStatus,
        CommitedCapacity: req.body.CommitedCapacity,
        Phases: req.body.Phases,
        ApprovelCapacity: req.body.ApprovelCapacity,
        ResorcesCapacity: req.body.ResorcesCapacity,
        Totalhourse: req.body.Totalhourse,
        Name: req.body.Name,
        EffortLevel: req.body.EffortLevel,
        StartDate: req.body.StartDate,
        BussinessSponser: req.body.BussinessSponser,
        ITSponser: req.body.ITSponser,
        ProjectManager: req.body.ProjectManager,
        ValidationLead: req.body.ValidationLead,
        CarryOver: req.body.CarryOver,
        Priority: req.body.Priority,
        StrategicObjective: req.body.StrategicObjective,
        CreateBy: req.body.CreateBy,
        GoLiveDate: req.body.GoLiveDate,
        ProjectTiers: req.body.ProjectTiers,
        ProjectBudget: req.body.ProjectBudget,
        PurchaseOrderAmounts: req.body.PurchaseOrderAmounts,
        ModifiedBy: req.body.ModifiedBy,
        ActualsMonthly: req.body.ActualsMonthly,
        Notes: req.body.Notes,
    };
    const ProjectDetails_PostData_Data = await ProjectModel.create(
        Project_PostData_Data
    );
    return res.status(201).json({
      status: "success",
      data: ProjectDetails_PostData_Data,
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(404).json({
      status: "Error",
      error,
    });
  }
};

exports.ProjectDetails_GetData = async function (req, res, next) {
  try {
    const ProjectDetails_Getdata = await ProjectModel.find();
    return res.status(200).json({
      status: "success",
      data: ProjectDetails_Getdata,
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(404).json({
      status: "Error",
      error,
    });
  }
};

exports.ProjectDetails_DeleteData = async function (req, res, next) {
  try {
    await ProjectModel.findByIdAndDelete(req.params.id);
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

exports.ProjectDetails_FindData = async function (req, res, next) {
  try {
    const ProjectDetails_FindData_Data = await ProjectModel.findById(req.params.id);
    return res.status(200).json({
      status: "success",
      data : ProjectDetails_FindData_Data
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(204).json({
      status: "Error",
      error,
    });
  }
};


exports.ProjectDetails_UpdateData = async function (req, res, next) {

  try {
        const Project_FindById_Data = await ProjectModel.findById(req.params.id);
        Project_FindById_Data.Name = req.body.Name;
        Project_FindById_Data.CreateBy = req.body.CreateBy;
        Project_FindById_Data.ModifiedBy = req.body.ModifiedBy;
        Project_FindById_Data.ProjectId = req.body.ProjectId;
        Project_FindById_Data.ResourceCount = req.body.ResourceCount;
        Project_FindById_Data.ProjectType = req.body.ProjectType;
        Project_FindById_Data.ProjectStatus = req.body.ProjectStatus;
        Project_FindById_Data.CommitedCapacity = req.body.CommitedCapacity;
        Project_FindById_Data.Phases = req.body.Phases;
        Project_FindById_Data.ApprovelCapacity = req.body.ApprovelCapacity;
        Project_FindById_Data.ResorcesCapacity = req.body.ResorcesCapacity;
        Project_FindById_Data.Totalhourse = req.body.Totalhourse;
        Project_FindById_Data.EffortLevel = req.body.EffortLevel;
        Project_FindById_Data.StartDate = req.body.StartDate;
        Project_FindById_Data.BussinessSponser = req.body.BussinessSponser;
        Project_FindById_Data.ITSponser = req.body.ITSponser;
        Project_FindById_Data.ProjectManager = req.body.ProjectManager;
        Project_FindById_Data.ValidationLead = req.body.ValidationLead;
        Project_FindById_Data.CarryOver = req.body.CarryOver;
        Project_FindById_Data.Priority = req.body.Priority;
        Project_FindById_Data.StrategicObjective = req.body.StrategicObjective;
        Project_FindById_Data.GoLiveDate = req.body.GoLiveDate;
        Project_FindById_Data.ProjectTiers = req.body.ProjectTiers;
        Project_FindById_Data.ProjectBudget = req.body.ProjectBudget;
        Project_FindById_Data.PurchaseOrderAmounts = req.body.PurchaseOrderAmounts;
        Project_FindById_Data.ModifiedBy = req.body.ModifiedBy;
        Project_FindById_Data.ActualsMonthly = req.body.ActualsMonthly;
        Project_FindById_Data.Notes = req.body.Notes;

  
    const ProjectDetails_UpdateData_data = await ProjectModel.findByIdAndUpdate(req.params.id , Project_FindById_Data)
    return res.status(202).json({
      status: "success",
      data: ProjectDetails_UpdateData_data,
    });
  } catch (error) {
    console.log("Catch Error " + error);
    return res.status(404).json({
      status: "Error",
      error,
    });
  }
};