var express = require('express');
var router = express.Router();
var api  = require('../controller/FunctionalGroup/FunctionalGroupController');

/* GET users listing. */
// router.post("/insert", api.insertBussenessUnit);
// router.get("/getData", api.getBussenessUnit);

router.post("/FunctionalGroup_PostData",  api.FunctionalGroup_PostData);
router.get("/FunctionalGroup_GetData",  api.FunctionalGroup_GetData);
router.delete("/FunctionalGroup_DeleteData/:id",  api.FunctionalGroup_DeleteData);
router.get("/FunctionalGroup_FindData/:id",  api.FunctionalGroup_FindData);
router.post("/FunctionalGroup_UpdateData/:id",  api.FunctionalGroup_UpdateData);

module.exports = router;



