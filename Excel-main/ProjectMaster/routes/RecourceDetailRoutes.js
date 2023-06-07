var express = require('express');
var router = express.Router();
var api  = require('../controller/RecourceDetail/RecourceDetailController');
const auth = require("../middleware/auth");


router.post("/RecourceDetail_PostData",  api.RecourceDetail_PostData);
router.get("/RecourceDetail_GetData",  api.RecourceDetail_GetData);
router.delete("/RecourceDetail_DeleteData/:id",  api.RecourceDetail_DeleteData);
router.get("/RecourceDetail_FindData/:id",  api.RecourceDetail_FindData);
router.post("/RecourceDetail_UpdateData/:id",  api.RecourceDetail_UpdateData);





module.exports = router;