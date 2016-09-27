// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppComponent } from "./components/app/app.component";
import { TelegramComponent } from "./components/telegram/telegram.component";

@NgModule({
    declarations: [AppComponent, TelegramComponent],
    bootstrap: [TelegramComponent],
    imports: [NativeScriptModule, NativeScriptFormsModule],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);