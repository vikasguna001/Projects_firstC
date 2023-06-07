var express = require('express');
var router = express.Router();
var api  = require('../controller/ProjectResourceDetail/ProjectResourceDetailController');
const auth = require("../middleware/auth");


router.post("/ProjectResourceDetail_PostData",  api.ProjectResourceDetail_PostData);
router.get("/ProjectResourceDetail_GetData",  api.ProjectResourceDetail_GetData);
router.delete("/ProjectResourceDetail_DeleteData/:id",  api.ProjectResourceDetail_DeleteData);
router.get("/ProjectResourceDetail_FindData/:id",  api.ProjectResourceDetail_FindData);
router.post("/ProjectResourceDetail_UpdateData/:id",  api.ProjectResourceDetail_UpdateData);





module.exports = router;