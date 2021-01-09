// Import store
import { ActionReducerMap } from "@ngrx/store";

// Import >> reducers <<
import * as auth from "./auth/auth.reducer";
import * as task from "./tasks/task.reducer";

// Imports >> effects <<
import { TaskEffects } from "./tasks/task.effects";
import { AuthEffects } from "./auth/auth.effects";

export interface IStore {
     authStore: auth.IStateInitialAuth,
     taskStore: task.IStateTask
};

export const initialStore: IStore = {
     authStore: auth.initialState,
     taskStore: task.initialStateTask
};

export const reducers: ActionReducerMap<IStore> = {
     authStore: auth.authReducer,
     taskStore: task.taskReducer
};

export const effects = [
     AuthEffects,
     TaskEffects
];
