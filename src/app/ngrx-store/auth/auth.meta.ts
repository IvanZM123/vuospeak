// Import modules
import { Action, ActionReducer } from "@ngrx/store";

// Import >> Auth Actions <<
import { successLogout } from "./auth.actions";

// Import index
import { IStore, initialStore } from "../index";

export function clearState<State extends IStore>(reducer: ActionReducer<any>): ActionReducer<any> {
     return function(state: State, action: Action) {
          if (action.type === successLogout().type) {
               state = initialStore as State;
          }

          return reducer(state, action);
     }
}
