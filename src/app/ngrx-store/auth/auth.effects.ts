// Imports modules
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

// Import Ngrx-store
import { Store } from "@ngrx/store";

// Imports >> models <<
import { User } from "src/app/models/User";
import { IStateInitialAuth } from "./auth.reducer";

// Imports >> Auth Actions <<
import * as authActions from "./auth.actions";

// Imports >> Auth Service <<
import { AuthService } from "src/app/services/auth/auth.service";

@Injectable()
export class AuthEffects {
     
     /**
      * Effect resposible of create a new user in
      * the Firebase Auth
     */
     register = createEffect(() => this.actions$.pipe(
          ofType(authActions.startRegister),
          mergeMap(payload => this.authService.signup(payload.credentials).pipe(
               map(() => (authActions.successRegister({ status: true, message: "" }))),
               tap(() => this.router.navigate(["/profile"])),
               catchError(error => of(authActions.failureRegister({ error })))
          ))
     ));

     /**
      * Responsible effect of logging in to the user
     */
    login = createEffect(() => this.actions$.pipe(
         ofType(authActions.startLogin),
          mergeMap(payload => this.authService.signin(payload.credentials).pipe(
               map(() => (authActions.successLogin({ message: "", status: true }))),
               tap(() => this.router.navigate(["/profile"])),
               catchError(error => of(authActions.failureLogin({ error })))
          ))
    ));

    /**
     * Effect responsible of auth to user with Google account
     */
    loginGoogle$ = createEffect(() => this.actions$.pipe(
         ofType(authActions.startLoginGoogle),
         switchMap(() => this.authService.signInWithGoogle()),
         map(() => (authActions.successLoginGoogle())),
         tap((() => this.router.navigate(["/profile"]))),
         catchError(error => of(authActions.failureLoginGoogle({ error })))
    ));

    /** */
    loginFacebook$ = createEffect(() => this.actions$.pipe(
         ofType(authActions.startLoginFacebook),
         switchMap(() => this.authService.signinInWithFacebook()),
         map(() => (authActions.successLoginFacebook())),
         tap(() => this.router.navigate(["/profile"])),
         catchError(error => of(authActions.failureLoginFacebook({ error })))
    ));

    /** */
    loginTwitter$ = createEffect(() => this.actions$.pipe(
         ofType(authActions.startLoginTwitter),
         switchMap(() => this.authService.signInWithTwitter()),
         map(() => (authActions.successLoginTwitter())),
         tap(() => this.router.navigate(["/profile"])),
         catchError(error => of(authActions.failureLoginTwitter({ error })))
    ));
     
    /**
     * Responsible effect of closing the user's session
     */
    $logout = createEffect(() => this.actions$.pipe(
         ofType(authActions.startLogout),
         mergeMap(() => this.authService.logout().pipe(
              map(() => {
                   document.location.href = "/login";
                   return authActions.successLogout();
               }),
              catchError(error => of(authActions.failureLogout({ error })))
         ))
    ));

     constructor(
          private actions$: Actions,
          private router: Router,
          private authService: AuthService,
          private store: Store<{
               authStore: IStateInitialAuth
          }>
     ) {
          this.watchStateUser();
     }

     private watchStateUser(): void {
          this.authService.user.subscribe(
               // Success
               user => {
                    if (!user) return;

                    // Create a new model
                    const payload = new User({
                         uid: user.uid,
                         name: user.displayName,
                         avatar: user.photoURL,
                         email: user.email
                    });

                    // Create action
                    const action = authActions.successAuth({ user: payload });
                    this.store.dispatch(action);
               },

               // Error
               error => console.error(error)
          );
     }
}
