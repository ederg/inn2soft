sap.ui.define([
  "com/inn2soft/pm/ess/controller/BaseController"
], function (BaseController) {
  "use strict";

  return BaseController.extend("com.inn2soft.pm.ess.controller.Details", {

    onInit: function () {
      var oRouter = this.getRouter();

      oRouter.getRoute("Detail").attachMatched(this._onRouteMatched, this);
    },  
    
    
    _onRouteMatched : function (oEvent) {
      var oArgs, oView;

      oArgs = oEvent.getParameter("arguments");
      oView = this.getView();
    
    },
    
    onBackToOverView : function (oEvent){
      this.getRouter().navTo("appHome");
    }

  });

});
