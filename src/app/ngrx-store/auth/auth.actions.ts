// Imports modules
import { createAction, props } from "@ngrx/store";

// Imports models
import { Credentials } from 'src/app/models/Credentials';
import { User } from "src/app/models/User";

// Current user
export const successAuth = createAction(
     "[Auth] Success Register",
     props<{ user: User }>()
);

// Signup
export const startRegister = createAction(
     "[Auth] Start Register",
     props<{ credentials: Credentials }>()
);

export const successRegister = createAction(
     "[Auth] Success Register",
     props<{ message: string, status: boolean }>()
);

export const failureRegister = createAction(
     "[Auth] Failure Register",
     props<{ error: any }>()
);

// -------- Sign in with email ------- //
export const startLogin = createAction(
     "[Auth] Start Login",
     props<{ credentials: Credentials }>()
);

export const successLogin = createAction(
     "[Auth] Success Login",
     props<{ message: string; status: boolean; }>()
);

export const failureLogin = createAction(
     "[Auth] Failure Login",
     props<{ error: any }>()
);

// ---------- Sign in with google ------------ //
export const startLoginGoogle = createAction(
     "[Auth] Start Login Google"
);

export const successLoginGoogle = createAction(
     "[Auth] Success Login Google",
);

export const failureLoginGoogle = createAction(
     "[Auth] Failure Login Google",
     props<{ error: any }>()
);

// ---------- Signin with Facebook ----------- //
export const startLoginFacebook = createAction(
     "[Auth] Start Login Facebook"
);

export const successLoginFacebook = createAction(
     "[Auth] Success Login Facebook"
);

export const failureLoginFacebook = createAction(
     "[Auth] Failure Login Facebook",
     props<{ error: any }>()
);

// --------- Sign in with Twitter --------- //
export const startLoginTwitter = createAction(
     "[Auth] Start Login Twitter"
);

export const successLoginTwitter = createAction(
     "[Auth] Success Login Twitter"
);

export const failureLoginTwitter = createAction(
     "[Auth] Failure Login Twitter",
     props<{ error: any }>()
);

// Logout
export const startLogout = createAction(
     "[Auth] Start Logout"
);

export const successLogout = createAction(
     "[Auth] Success Logout"
);

export const failureLogout = createAction(
     "[Auth] Failure Logout",
     props<{ error: any }>()
);
