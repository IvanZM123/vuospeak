// Imports modules
import { Component } from '@angular/core';

// Import models
import { IHeaderForm } from "../../components/auth-form/models/auth-form.models";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {
  header: IHeaderForm = {
    title: "Crear una cuenta",
    subtitle: "Crea una cuenta y organiza tu vida"
  };
}
