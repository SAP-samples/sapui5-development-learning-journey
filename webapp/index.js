sap.ui.define(["sap/ui/core/ComponentContainer"], function (ComponentContainer) {
    "use strict";

    var oContainer = new ComponentContainer({
        id: "container",
        name: "sap.training.exc",
        manifest: true,
        async: true,
        settings: {
            id: "sap.training.exc"
        }
    });
    oContainer.placeAt("content");

});