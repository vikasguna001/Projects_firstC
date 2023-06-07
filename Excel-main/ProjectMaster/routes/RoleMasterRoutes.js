var express = require('express');
var router = express.Router();
var api  = require('../controller/RoleMaster/RoleMasterController');
const auth = require("../middleware/auth");


router.post("/RoleMaster_PostData",  api.RoleMaster_PostData);
router.get("/RoleMaster_GetData",  api.RoleMaster_GetData);
router.delete("/RoleMaster_DeleteData/:id",  api.RoleMaster_DeleteData);
router.get("/RoleMaster_FindData/:id",  api.RoleMaster_FindData);
router.post("/RoleMaster_UpdateData/:id",  api.RoleMaster_UpdateData);





module.exports = router;