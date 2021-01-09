// Import modules
import { Component } from '@angular/core';

// Import >> Interfaces components <<
import { IHeaderForm } from 'src/app/components/auth-form/models/auth-form.models';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
  header: IHeaderForm = {
    title: "Iniciar sesion",
    subtitle: "Inicia sesion y accede a todas tus notas"
  };
}
