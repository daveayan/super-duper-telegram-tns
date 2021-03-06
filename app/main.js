"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var app_component_1 = require("./components/app/app.component");
var telegram_component_1 = require("./components/telegram/telegram.component");
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    AppComponentModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, telegram_component_1.TelegramComponent],
            bootstrap: [telegram_component_1.TelegramComponent],
            imports: [platform_1.NativeScriptModule, forms_1.NativeScriptFormsModule],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponentModule);
    return AppComponentModule;
}());
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=main.js.map