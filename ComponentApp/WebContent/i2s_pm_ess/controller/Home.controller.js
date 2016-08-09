sap.ui.define([
  "com/inn2soft/pm/ess/controller/BaseController"
], function (BaseController) {
  "use strict";

  return BaseController.extend("com.inn2soft.pm.ess.controller.Home", {

    onDisplayNotFound : function (oEvent) {
      // display the "notFound" target without changing the hash
      this.getRouter().getTargets().display("notFound", {
        fromTarget : "home"
      });
    },

    onNavToEmployees : function (oEvent){
      
      
      this.getRouter().navTo("Detail",{
        ObjectiveAgreementId : "123"
      });
  //    this.getRouter().navTo("employeeList");
    }

  });

});
