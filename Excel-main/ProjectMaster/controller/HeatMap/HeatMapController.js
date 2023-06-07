const HeatMapService = require("../../Services/HeatMapService/HeatMapService")



exports.HeatMap_PostData = async function (req, res, next) {
    return HeatMapService.HeatMap_PostData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.HeatMap_GetData = async function (req, res, next) {
    return HeatMapService.HeatMap_GetData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.HeatMap_DeleteData = async function (req, res, next) {
    return HeatMapService.HeatMap_DeleteData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.HeatMap_FindData = async function (req, res, next) {
    return HeatMapService.HeatMap_FindData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.HeatMap_UpdateData = async function (req, res, next) {
    return HeatMapService.HeatMap_UpdateData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};