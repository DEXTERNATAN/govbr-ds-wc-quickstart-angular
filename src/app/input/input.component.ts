import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
})
export class InputComponent {
  count = 1;
  count2 = 3;
  nome: string = "Natanael";
  sobrenome: string = "Leite";
  counter = new FormControl(2, Validators.min(0));


  saveRange(event: any) {
    console.log(event.target.value);
  }
}
