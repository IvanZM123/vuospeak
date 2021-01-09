// Import modules
import { createReducer, on } from "@ngrx/store";

// Import models
import { User } from 'src/app/models/User';

// Import >> Auth Actions <<
import * as authActions from "./auth.actions";

export interface IStateInitialAuth {
     user: User | null;
     error: any;
};

export const initialState: IStateInitialAuth = {
     user: null,
     error: null,
};

const _authReducer = createReducer(
     initialState,

     on(authActions.successAuth, (state, { user }) => ({ ...state, user })),

     // Register with email and password
     on(authActions.successRegister, (state) => ({ ...state })),

     on(authActions.failureRegister, (state, { error }) => ({ ...state, error })),

     // Login with email and password
     on(authActions.successLogin, (state) => ({ ...state })),

     on(authActions.failureLogin, (state, { error }) => ({ ...state, error })),

     // Login with Google
     on(authActions.successLoginGoogle, (state) => ({ ...state })),

     on(authActions.failureLoginGoogle, (state, { error }) => ({ ...state, error })),

     // Login Facebook
     on(authActions.successLoginFacebook, (state) => ({ ...state })),

     on(authActions.failureLoginFacebook, (state, { error }) => ({ ...state, error })),

     // Login Twitter
     on(authActions.successLoginTwitter, (state) => ({ ...state })),

     on(authActions.failureLoginTwitter, (state, { error }) => ({ ...state, error }))
);

export function authReducer(state: any, action: any) {
     return _authReducer(state, action);
}
