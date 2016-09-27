"use strict";
var core_1 = require("@angular/core");
var services_1 = require("../../services");
var TelegramComponent = (function () {
    function TelegramComponent(localStorageService, messageService) {
        this.localStorageService = localStorageService;
        this.messageService = messageService;
        this.localStorageService.resetStorage();
        this.localStorageService.getSettings();
    }
    TelegramComponent.prototype.submit = function () {
        console.log("Save Settings " + this.fromNumber + ", " + this.toNumber + ", " + this.messageEntered);
        this.localStorageService.saveSettings(this.fromNumber, this.toNumber, this.messageEntered);
        var sdt_json = this.localStorageService.getSettings();
        this.messages = sdt_json.messages;
    };
    TelegramComponent.prototype.sendMessage = function () {
        console.log("Send Message " + this.selectedMessage);
        this.localStorageService.saveSettings(this.fromNumber, this.toNumber, this.messageEntered);
        var sdt_json = this.localStorageService.getSettings();
        this.messageService.sendMessage(sdt_json.fromNumber, sdt_json.toNumber, this.messageToSend);
    };
    TelegramComponent.prototype.selectedIndexChanged = function (picker) {
        this.messageToSend = picker.items[picker.selectedIndex];
    };
    TelegramComponent = __decorate([
        core_1.Component({
            selector: "super-duper-telegram-tns",
            providers: [services_1.LocalStorageService, services_1.MessageService],
            template: "\n    <StackLayout>\n        <TextField [(ngModel)]=\"fromNumber\" hint=\"From Phone Number\" keyboardType=\"phone\" autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>>\n        <TextField [(ngModel)]=\"toNumber\" hint=\"To Phone Number\" keyboardType=\"phone\" autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>>\n        <TextField [(ngModel)]=\"messageEntered\" hint=\"Message\" keyboardType=\"text\" autocorrect=\"true\" autocapitalizationType=\"none\"></TextField>>\n        <Button text=\"Save Settings\" autocapitalizationType=\"none\" (tap)=\"submit()\"></Button>\n        <ListPicker #picker [items]=\"messages\" (selectedIndexChange)=\"selectedIndexChanged(picker)\"></ListPicker>\n        <Button text=\"Send Message\" autocapitalizationType=\"none\" (tap)=\"sendMessage()\"></Button>\n    </StackLayout>\n    "
        }), 
        __metadata('design:paramtypes', [services_1.LocalStorageService, services_1.MessageService])
    ], TelegramComponent);
    return TelegramComponent;
}());
exports.TelegramComponent = TelegramComponent;
//# sourceMappingURL=telegram.component.js.map