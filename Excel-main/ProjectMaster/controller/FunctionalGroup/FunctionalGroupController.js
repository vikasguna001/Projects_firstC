const FunctionalGroupService = require("../../Services/FunctionalGroupService/FunctionalGroupService")



exports.FunctionalGroup_PostData = async function (req, res, next) {
    return FunctionalGroupService.FunctionalGroup_PostData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.FunctionalGroup_GetData = async function (req, res, next) {
    return FunctionalGroupService.FunctionalGroup_GetData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.FunctionalGroup_DeleteData = async function (req, res, next) {
    return FunctionalGroupService.FunctionalGroup_DeleteData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.FunctionalGroup_FindData = async function (req, res, next) {
    return FunctionalGroupService.FunctionalGroup_FindData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.FunctionalGroup_UpdateData = async function (req, res, next) {
    return FunctionalGroupService.FunctionalGroup_UpdateData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};