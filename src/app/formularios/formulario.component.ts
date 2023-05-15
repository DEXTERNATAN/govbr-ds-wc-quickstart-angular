import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Usuario } from "./usuario";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
})
export class FormularioComponent implements OnInit {
  userForm: FormGroup;
  submited: Boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm({} as Usuario);
  }

  createForm(usuario: Usuario) {
    const {
      nome,
      email,
      telefone,
      cpf,
      dataNascimento,
      senha,
      confirmarSenha,
      endereco,
      cep,
    } = usuario;

    this.userForm = this.formBuilder.group({
      nome: [nome, Validators.required],
      email: [email, [Validators.required]],
      telefone: [telefone, Validators.required],
      cpf: [cpf, Validators.required],
      dataNascimento: [dataNascimento, Validators.required],
      senha: [senha, Validators.required],
      confirmarSenha: [confirmarSenha, Validators.required],
      endereco: [endereco],
      cep: [cep],
    });
  }

  getInputState(controlName: string): string {
    const control = this.userForm.get(controlName);
    return control.invalid && control.touched ? "danger" : "";
  }

  hideMessage() {
    setTimeout(() => {
      this.submited = false;
    }, 20000);
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log("Formulário válido", this.userForm.value);
      this.userForm.reset();
      this.submited = true;
      this.hideMessage();
      this.userForm.markAsUntouched();
    } else {
      console.log("Formulário inválido");
      this.userForm.markAllAsTouched();
    }
  }
}
