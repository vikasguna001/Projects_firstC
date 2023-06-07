// import BusinessUnit from "../src/component/BusinessUnit/BusinessUnit";
import { config } from "./config";

const { apiURL } = config;

const urlConstant = {
  BusinessUnit: {
    getBussinssUnitData: `${apiURL}bussinessUnit/BusinessUnit_GetData`,
    BusinessUnitPostData: `${apiURL}bussinessUnit/BusinessUnit_PostData`,
    BusinessUnitDeleteData: `${apiURL}bussinessUnit/BusinessUnit_DeleteData`,
    BusinessUnitUpdateData: `${apiURL}bussinessUnit/BusinessUnit_UpdateData`,
    BusinessUnitFindData: `${apiURL}bussinessUnit/BusinessUnit_FindData`,
    
  },

  functionalGroup: {
    getFunctionalData: `${apiURL}functionalgroup/FunctionalGroup_GetData`,
    functionalPostData: `${apiURL}functionalgroup/FunctionalGroup_PostData`,
    functionalDeleteData: `${apiURL}functionalgroup/FunctionalGroup_DeleteData`,
    functionalFindData: `${apiURL}functionalgroup/FunctionalGroup_FindData`,
    functionalUpdateData: `${apiURL}functionalgroup/FunctionalGroup_UpdateData`,
  },
  ProjectRecourceDetail:{
    getProjectRecourceData: `${apiURL}projectresourcedetail/ProjectResourceDetail_GetData`,
    ProjectRecourcePostData: `${apiURL}projectresourcedetail/ProjectResourceDetail_PostData`,
    ProjectRecourceDeleteData: `${apiURL}projectresourcedetail/ProjectResourceDetail_DeleteData`,
    ProjectRecourceFindData: `${apiURL}projectresourcedetail/ProjectResourceDetail_FindData`,
    ProjectRecourceUpdateData: `${apiURL}projectresourcedetail/ProjectResourceDetail_UpdateData`,
  },
  User:{
    UserDataPost: `${apiURL}users/register`,
    UserLogin: `${apiURL}users/login`
  },
  recourceDetail:{
    getRecourceData:  `${apiURL}recourcedetail/RecourceDetail_GetData`,
    recourcePostData: `${apiURL}recourcedetail/RecourceDetail_PostData`,
    recourceDeleteData: `${apiURL}recourcedetail/RecourceDetail_DeleteData`,
    recourceFindData: `${apiURL}recourcedetail/RecourceDetail_FindData`,
    recourceUpdateData: `${apiURL}recourcedetail/RecourceDetail_UpdateData`,
  }
};

export { urlConstant as default };
