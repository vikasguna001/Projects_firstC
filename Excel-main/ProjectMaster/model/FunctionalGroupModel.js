const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");

const fuctionalGroup = new mongoose.Schema({
  Id: {
    type: Number,
    unique: true,
    required: true,
    min: 1,
  },
  BussinessUnitId: {
    type: String,
  },
  Name: {
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
fuctionalGroup.plugin(autoIncrement.plugin, {
  model: "fuctionalGroup",
  field: "Id",
  startAt: 1,
  incrementBy: 1,
});
//businessUnit.plugin(autoIncrement.plugin, 'businessunits'); // 4. use autoIncrement
const fuctionalGroupModel = mongoose.model("fuctionalGroup", fuctionalGroup);
module.exports = fuctionalGroupModel;
