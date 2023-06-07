const ProjectResourceDetailService  = require("../../Services/ProjectResourceDetailService/ProjectResourceDetailService")



exports.ProjectResourceDetail_PostData = async function (req, res, next) {
    return ProjectResourceDetailService.ProjectResourceDetail_PostData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.ProjectResourceDetail_GetData = async function (req, res, next) {
    return ProjectResourceDetailService.ProjectResourceDetail_GetData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.ProjectResourceDetail_DeleteData = async function (req, res, next) {
    return ProjectResourceDetailService.ProjectResourceDetail_DeleteData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.ProjectResourceDetail_FindData = async function (req, res, next) {
    return ProjectResourceDetailService.ProjectResourceDetail_FindData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.ProjectResourceDetail_UpdateData = async function (req, res, next) {
    return ProjectResourceDetailService.ProjectResourceDetail_UpdateData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};