import { Component, Input } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
})
export class MessageComponent {
  @Input() control: AbstractControl;
  @Input() error: string;
  @Input() message: string;
}
