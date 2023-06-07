var express = require("express");
var router = express.Router();
var api = require("../controller/BusinessUnit/BusinessUnitController");

/* GET users listing. */
// router.post("/insert", api.insertBussenessUnit);
// router.get("/getData", api.getBussenessUnit);

router.post("/BusinessUnit_PostData", api.BusinessUnit_PostData);
router.get("/BusinessUnit_GetData", api.BusinessUnit_GetData);
router.delete("/BusinessUnit_DeleteData/:id", api.BusinessUnit_DeleteData);
router.get("/BusinessUnit_FindData/:id", api.BusinessUnit_FindData);
router.post("/BusinessUnit_UpdateData/:id", api.BusinessUnit_UpdateData);
router.get("/get_join_data", api.get_join_data);

module.exports = router;
