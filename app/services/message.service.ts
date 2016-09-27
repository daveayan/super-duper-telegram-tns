import { Injectable } from "@angular/core";
// import * as Messenger from "nativescript-messenger";

@Injectable()
export class MessageService {
    sendMessage(from, to, message) {
        console.log("Send Message " + from + ", " + to + ", " + message);
    }
}