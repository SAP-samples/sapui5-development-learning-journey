sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device"
],
    function (UIComponent, Device) {
        "use strict";

        return UIComponent.extend("sap.training.exc.Component", {

            metadata: {
                manifest: "json"
            },


            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
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