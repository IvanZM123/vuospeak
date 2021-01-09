// Imports modules.
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

// Import interface
import { IHeaderForm } from "./models/auth-form.models";

// Import Ngrx-store
import { Store } from "@ngrx/store";
import * as authActions from "../../ngrx-store/auth/auth.actions";
import { IStateInitialAuth } from "../../ngrx-store/auth/auth.reducer";

// Import >> Rules <<
import { rules } from "../../rules/rules";

// Import >> Helpers validate input <<
import { setMessageInput, validateInput } from "../../helpers/validators-forms.helper";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  // Inputs
  @Input() isRegister!: boolean;
  @Input() header!: IHeaderForm;

  // Properties
  public credentials = new FormGroup({
    email: new FormControl("", [
      Validators.pattern(rules.email.expression)
    ]),
    password: new FormControl("", [
      Validators.pattern(rules.password.expression)
    ])
  });
  public inputs!: NodeListOf<HTMLInputElement>;
  public smalls!: NodeListOf<HTMLElement>;

  constructor(
    private store: Store<{
      authStore: IStateInitialAuth,
    }>
  ) {}

  ngOnInit(): void {
    this.watchErrorAuth();

    this.inputs = document.querySelectorAll("input");
    this.smalls = document.querySelectorAll("small");
    validateInput(this.inputs, this.smalls, rules);
  }

  /**
   * Responsible method of user authentication
   */
  public auth() {
    this.isRegister ? this.register() : this.login();
    return false;
  }

  /**
   * Method responsible for user registration
   */
  private register() {
    const payload = this.credentials.value;

    // Create action
    const action = authActions.startRegister({ credentials: payload });
    this.store.dispatch(action);
  }

  /**
   * Method responsible for the login of our users
   */
  private login() {
    const payload = this.credentials.value;
    
    // Create action
    const action = authActions.startLogin({ credentials: payload });
    this.store.dispatch(action);
  }

  public loginWithGoogle(): void {
    const action = authActions.startLoginGoogle();
    this.store.dispatch(action);
  }

  public loginWithFacebook(): void {
    const action = authActions.startLoginFacebook();
    this.store.dispatch(action);
  }

  public loginWithTwitter(): void {
    const action = authActions.startLoginTwitter();
    this.store.dispatch(action);
  }
  
  /**
   * Responsible method of observing the errors
   * when the user tries to authenticate
  */
  private watchErrorAuth() {
    this.store.select("authStore").subscribe(
      data => {
        const { error } = data;
        if (!error) return;

        // Validate user not fount
        if (error.code == "auth/user-not-found") {
          this.setErrorInput("El email no existe, si el error continua cree una cuenta.", "email");
        }

        // Validate email exists
        if (error.code == "auth/email-already-in-use") {
          this.setErrorInput("El email que has ingresado ya existe.", "email");
        }

        // Validate incorrect password
        if (error.code == "auth/wrong-password") {
          this.setErrorInput("Contraseña incorrecta.", "password");
        }
      },
      error => console.error(error)
    );
  }

  private setErrorInput(message: string, field: string): void {
    this.inputs?.forEach((input, index) => {
      if (input.name == field) {
        const small = this.smalls.item(index);
        setMessageInput(input, small, false, message);
      }
    });
  }
  
  public setColor() {
    return this.isRegister ? "btn-dark" : "btn-primary";
  }

  public setText() {
    return this.isRegister ? "Registrate" : "Iniciar sesion";
  }
}
