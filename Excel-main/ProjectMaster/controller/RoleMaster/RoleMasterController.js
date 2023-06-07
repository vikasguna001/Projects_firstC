const RoleMasterService  = require("../../Services/RoleMasterService/RoleMasterService")



exports.RoleMaster_PostData = async function (req, res, next) {
    return RoleMasterService.RoleMaster_PostData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.RoleMaster_GetData = async function (req, res, next) {
    return RoleMasterService.RoleMaster_GetData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.RoleMaster_DeleteData = async function (req, res, next) {
    return RoleMasterService.RoleMaster_DeleteData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.RoleMaster_FindData = async function (req, res, next) {
    return RoleMasterService.RoleMaster_FindData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.RoleMaster_UpdateData = async function (req, res, next) {
    return RoleMasterService.RoleMaster_UpdateData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};