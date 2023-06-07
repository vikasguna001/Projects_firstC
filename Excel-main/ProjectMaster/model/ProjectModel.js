const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");

const project = new mongoose.Schema({
  Id: {
    type: Number,
    unique: true,
    min: 1,
  },
  ProjectId: {
    type: String,
  },
  Name: {
    type: String,
    required: true,
  },
  ResourceCount: {
    type: Number,
  },
  ProjectType: {
    type: String,
  },
  ProjectStatus: {
    type: String,
  },
  CommitedCapacity: {
    type: Number,
  },
  Phases: {
    type: String,
  },
  ApprovelCapacity: {
    type: Number,
  },
  ResorcesCapacity: {
    type: Number,
  },
  Totalhourse: {
    type: Number,
  },
  EffortLevel: {
    type: String,
  },
  StartDate: {
    type: Date,
  },
  BussinessSponser: {
    type: String,
  },
  ITSponser: {
    type: String,
  },
  ProjectManager: {
    type: String,
  },
  ValidationLead: {
    type: String,
  },
  CarryOver: {
    type: String,
  },
  Priority: {
    type: Number,
  },
  StrategicObjective: {
    type: String,
  },
  GoLiveDate: {
    type: Date,
  },
  ProjectTiers: {
    type: String,
  },
  ProjectBudget: {
    type: String,
  },
  PurchaseOrderAmounts: {
    type: String,
  },
  ActualsMonthly: {
    type: String,
  },
  Notes: {
    type: String,
  },
  CreateBy: {
    type: String,
  },
  CreateDate: {
    type: Date,
    default: Date.now,
  },
  ModifiedBy: {
    type: String,
  },
  ModifiedDate: {
    type: Date,
    default: Date.now,
  },
});

//const BussinessUnitModel = mongoose.model('businessunits',businessUnit);
autoIncrement.initialize(mongoose.connection); // 3. initialize autoIncrement
project.plugin(autoIncrement.plugin, {
  model: "ProjectModel",
  field: "Id",
  startAt: 1,
  incrementBy: 1,
});
//businessUnit.plugin(autoIncrement.plugin, 'businessunits'); // 4. use autoIncrement
const ProjectModel = mongoose.model("ProjectModel", project);
module.exports = ProjectModel;
