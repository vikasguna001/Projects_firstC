const RecourceDetailService  = require("../../Services/RecourceDetail/RecourceDetailService")



exports.RecourceDetail_PostData = async function (req, res, next) {
    return RecourceDetailService.RecourceDetail_PostData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.RecourceDetail_GetData = async function (req, res, next) {
    return RecourceDetailService.RecourceDetail_GetData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.RecourceDetail_DeleteData = async function (req, res, next) {
    return RecourceDetailService.RecourceDetail_DeleteData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.RecourceDetail_FindData = async function (req, res, next) {
    return RecourceDetailService.RecourceDetail_FindData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};

exports.RecourceDetail_UpdateData = async function (req, res, next) {
    return RecourceDetailService.RecourceDetail_UpdateData(req, res, next)
//    .then(user => res.json(user))
//         .catch(next);
};