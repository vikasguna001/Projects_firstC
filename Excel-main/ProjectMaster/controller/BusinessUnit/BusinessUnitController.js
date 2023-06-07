const BusinessUnitService = require("../../Services/BusinessUnitService/BusinessUnitService")

// exports.insertBussenessUnit = async function (req, res, next) {
//       return await BusinessUnitService.insertBussenessUnitData(req, res, next)
// };

// exports.getBussenessUnit = async function (req, res, next) {
//     return await BusinessUnitService.getBussenessUnitData(req, res, next);
// };
exports.BusinessUnit_PostData = async function (req, res, next) {
    return BusinessUnitService.BusinessUnit_PostData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};
exports.BusinessUnit_GetData = async function (req, res, next) {
    return BusinessUnitService.BusinessUnit_GetData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};
exports.BusinessUnit_DeleteData = async function (req, res, next) {
    return BusinessUnitService.BusinessUnit_DeleteData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};
exports.BusinessUnit_FindData = async function (req, res, next) {
    return BusinessUnitService.BusinessUnit_FindData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.BusinessUnit_UpdateData  = async function (req, res, next) {
    return BusinessUnitService.BusinessUnit_UpdateData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.get_join_data  = async function (req, res, next) {
    return BusinessUnitService.get_join_data(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};