import {Component} from "@angular/core";

import {LocalStorageService, MessageService} from "../../services";

@Component({
    selector: "super-duper-telegram-tns",
    providers: [LocalStorageService, MessageService],
    template: `
    <StackLayout>
        <TextField [(ngModel)]="fromNumber" hint="From Phone Number" keyboardType="phone" autocorrect="false" autocapitalizationType="none"></TextField>>
        <TextField [(ngModel)]="toNumber" hint="To Phone Number" keyboardType="phone" autocorrect="false" autocapitalizationType="none"></TextField>>
        <TextField [(ngModel)]="messageEntered" hint="Message" keyboardType="text" autocorrect="true" autocapitalizationType="none"></TextField>>
        <Button text="Save Settings" autocapitalizationType="none" (tap)="submit()"></Button>
        <ListPicker #picker [items]="messages" (selectedIndexChange)="selectedIndexChanged(picker)"></ListPicker>
        <Button text="Send Message" autocapitalizationType="none" (tap)="sendMessage()"></Button>
    </StackLayout>
    `
})
export class TelegramComponent {
    public fromNumber: string
    public toNumber: string
    public messageEntered: string
    public messages: string[]
    public selectedMessage: string
    private messageToSend: string

    constructor( private localStorageService: LocalStorageService, private messageService: MessageService ) { 
        this.localStorageService.resetStorage();
        this.localStorageService.getSettings();
    }

    public submit() {
        console.log("Save Settings " + this.fromNumber + ", " + this.toNumber + ", " + this.messageEntered);
        this.localStorageService.saveSettings(this.fromNumber, this.toNumber, this.messageEntered);
        let sdt_json = this.localStorageService.getSettings();

        this.messages = sdt_json.messages;
    }

    public sendMessage() {
        console.log("Send Message " + this.selectedMessage);
        this.localStorageService.saveSettings(this.fromNumber, this.toNumber, this.messageEntered);
        let sdt_json = this.localStorageService.getSettings();

        this.messageService.sendMessage(sdt_json.fromNumber, sdt_json.toNumber, this.messageToSend);
    }

    public selectedIndexChanged(picker) {
        this.messageToSend = picker.items[picker.selectedIndex];
    }
}
