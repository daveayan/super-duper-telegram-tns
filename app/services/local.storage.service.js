"use strict";
var application_settings_1 = require("application-settings");
var core_1 = require("@angular/core");
var SDT_TOKEN = "SDT_TOKEN";
var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.saveSettings = function (fromNumber, toNumber, message) {
        console.log("Service saving " + fromNumber + ", " + toNumber + ", " + message);
        var sdt_json = this.getSettings();
        sdt_json.fromNumber = fromNumber;
        sdt_json.toNumber = toNumber;
        if (sdt_json.messages.indexOf(message) === -1) {
            sdt_json.messages.push(message);
        }
        application_settings_1.setString(SDT_TOKEN, JSON.stringify(sdt_json));
    };
    LocalStorageService.prototype.getSettings = function () {
        var sdt_json = JSON.parse(application_settings_1.getString(SDT_TOKEN));
        console.log("In Local Storage");
        console.log("from = " + sdt_json.fromNumber);
        console.log("to = " + sdt_json.toNumber);
        console.log("messages = " + sdt_json.messages);
        return sdt_json;
    };
    LocalStorageService.prototype.resetStorage = function () {
        console.log("Service Reset ");
        var arrayMessages = [];
        var sdt_json = this.getSettings();
        sdt_json.fromNumber = "";
        sdt_json.toNumber = "";
        sdt_json.messages = arrayMessages;
        application_settings_1.setString(SDT_TOKEN, JSON.stringify(sdt_json));
    };
    LocalStorageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LocalStorageService);
    return LocalStorageService;
}());
exports.LocalStorageService = LocalStorageService;
//# sourceMappingURL=local.storage.service.js.map