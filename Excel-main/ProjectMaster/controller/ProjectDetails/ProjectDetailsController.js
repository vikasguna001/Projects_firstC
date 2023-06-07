const ProjectDetailsService  = require("../../Services/ProjectDetailService/ProjectDetailService")



exports.ProjectDetails_PostData = async function (req, res, next) {
    return ProjectDetailsService.ProjectDetails_PostData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.ProjectDetails_GetData = async function (req, res, next) {
    return ProjectDetailsService.ProjectDetails_GetData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.ProjectDetails_DeleteData = async function (req, res, next) {
    return ProjectDetailsService.ProjectDetails_DeleteData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.ProjectDetails_FindData = async function (req, res, next) {
    return ProjectDetailsService.ProjectDetails_FindData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.ProjectDetails_UpdateData = async function (req, res, next) {
    return ProjectDetailsService.ProjectDetails_UpdateData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};