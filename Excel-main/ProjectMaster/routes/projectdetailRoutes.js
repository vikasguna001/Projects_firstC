var express = require('express');
var router = express.Router();
var api  = require('../controller/ProjectDetails/ProjectDetailsController');

/* GET users listing. */
// router.post("/insert", api.insertBussenessUnit);
// router.get("/getData", api.getBussenessUnit);

router.post("/ProjectDetails_PostData",  api.ProjectDetails_PostData);
router.get("/ProjectDetails_GetData",  api.ProjectDetails_GetData);
router.delete("/ProjectDetails_DeleteData/:id",  api.ProjectDetails_DeleteData);
router.get("/ProjectDetails_FindData/:id",  api.ProjectDetails_FindData);
router.post("/ProjectDetails_UpdateData/:id",  api.ProjectDetails_UpdateData);

module.exports = router;



