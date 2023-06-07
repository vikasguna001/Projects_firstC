var express = require('express');
var router = express.Router();
var api  = require('../controller/HeatMap/HeatMapController');

/* GET users listing. */
// router.post("/insert", api.insertBussenessUnit);
// router.get("/getData", api.getBussenessUnit);

router.post("/HeatMap_PostData",  api.HeatMap_PostData);
router.get("/HeatMap_GetData",  api.HeatMap_GetData);
router.delete("/HeatMap_DeleteData/:id",  api.HeatMap_DeleteData);
router.get("/HeatMap_FindData/:id",  api.HeatMap_FindData);
router.post("/HeatMap_UpdateData/:id",  api.HeatMap_UpdateData);

module.exports = router;



