"use strict";
var core_1 = require("@angular/core");
// import * as Messenger from "nativescript-messenger";
var MessageService = (function () {
    function MessageService() {
    }
    MessageService.prototype.sendMessage = function (from, to, message) {
        console.log("Send Message " + from + ", " + to + ", " + message);
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map