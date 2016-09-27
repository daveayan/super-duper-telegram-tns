import { getString, setString } from "application-settings";
import { Injectable } from "@angular/core";

const SDT_TOKEN = "SDT_TOKEN"

@Injectable()
export class LocalStorageService {
    saveSettings(fromNumber, toNumber, message) {
        console.log("Service saving " + fromNumber + ", " + toNumber + ", " + message);

        var sdt_json = this.getSettings();
        sdt_json.fromNumber = fromNumber;
        sdt_json.toNumber = toNumber;

        if(sdt_json.messages.indexOf(message) === -1) {
            sdt_json.messages.push(message);
        }
        
        setString(SDT_TOKEN, JSON.stringify(sdt_json));
    }

    getSettings() {
        let sdt_json = JSON.parse(getString(SDT_TOKEN));

        console.log("In Local Storage");
        console.log("from = " + sdt_json.fromNumber);
        console.log("to = " + sdt_json.toNumber);
        console.log("messages = " + sdt_json.messages);

        return sdt_json;
    }

    resetStorage() {
        console.log("Service Reset ");
        var arrayMessages: string[] = [];

        var sdt_json = this.getSettings();
        sdt_json.fromNumber = "";
        sdt_json.toNumber = "";
        sdt_json.messages = arrayMessages;
        

        setString(SDT_TOKEN, JSON.stringify(sdt_json));
    }
}