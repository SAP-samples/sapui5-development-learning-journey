sap.ui.define(["sap/base/i18n/ResourceBundle"], function (ResourceBundle) {
    "use strict";

    return {

        classText: function (sClass) {
            var oResourceBundle = ResourceBundle.create({ url: "i18n/i18n.properties" });

            switch (sClass) {
                case "C":
                    return oResourceBundle.getText("flightClassC");
                case "Y":
                    return oResourceBundle.getText("flightClassY");
                case "F":
                    return oResourceBundle.getText("flightClassF");
                default:
                    return sClass;
            }
        }

    };

});