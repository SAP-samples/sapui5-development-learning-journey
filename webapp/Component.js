sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel"
],
    function (UIComponent, Device, JSONModel) {
        "use strict";

        return UIComponent.extend("sap.training.exc.Component", {

            metadata: {
                manifest: "json"
            },


            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // set device model
                var oDeviceModel = new JSONModel(Device);
                oDeviceModel.setDefaultBindingMode("OneWay");
                this.setModel(oDeviceModel, "device");

                // enable routing
                this.getRouter().initialize();
            },

            getContentDensityClass: function () {
                if (!this._sContentDensityClass) {
                    if (Device.support.touch) {
                        this._sContentDensityClass = "sapUiSizeCozy";
                    } else {
                        this._sContentDensityClass = "sapUiSizeCompact";
                    }
                }
                return this._sContentDensityClass;
            }

        });
    }
);