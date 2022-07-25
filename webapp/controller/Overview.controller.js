sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/syncStyleClass",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, syncStyleClass, JSONModel) {
        "use strict";

        return Controller.extend("sap.training.exc.controller.Overview", {

            onInit: function () {
                var oModel = new JSONModel();
                this.getView().setModel(oModel, "customer");
            },

            onSave: function () {
                // create dialog lazily
                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "sap.training.exc.view.Dialog"
                    }).then(function (oDialog) {
                        // forward compact/cozy style into dialog
                        syncStyleClass(this.getOwnerComponent().getContentDensityClass(), this.getView(), oDialog);
                        return oDialog;
                    }.bind(this));
                }
                this.pDialog.then(function (oDialog) {
                    oDialog.open();
                });
            },

            onCloseDialog: function () {
                // note: You don't need to chain to the pDialog promise, since this event handler
                // is only called from within the loaded dialog itself.
                this.byId("dialog").close();
            }

        });
    });