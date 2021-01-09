// Import modules
import { createReducer, on, Action, createFeatureSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

// Import >> Models <<
import { Task } from "src/app/models/Note.models";

// Import >> Task Actions <<
import * as taskActions from "./task.actions";

// Export >> Task Adapter <<
export const taskAdapter: EntityAdapter<Task> = createEntityAdapter<Task>();

// Export >> State <<
export interface IMessageTask {
     status: boolean;
     text: string;
};

export interface IStateTask extends EntityState<Task> {
     error: any;
     message: IMessageTask | null;
     selectedUserId: number | null;
}

// Export >> State Initial <<
export const initialStateTask: IStateTask = taskAdapter.getInitialState({
     error: null,
     message: null,
     selectedUserId: null
});

export const _taskReducer = createReducer(
     initialStateTask,

     on(taskActions.successAddTask, (state, { task }) => {
          return taskAdapter.addOne(task, state);
     }),

     on(taskActions.successUpdateTask, (state, { task }) => {
          return taskAdapter.updateOne({
               id: task.id as string,
               changes: task
          }, state);
     }),

     on(taskActions.successDeleteTask, (state, { id }) => {
          return taskAdapter.removeOne(id, state);
     }),

     // Operations result
     on(taskActions.successRequest, (state, { message }) => ({
          ...state,
          message
     })),

     on(taskActions.failureRequest, (state, { message }) => ({
          ...state,
          message
     }))
);

export function taskReducer(state: IStateTask | undefined, action: Action) {
     return _taskReducer(state, action);
}

export const getStateTask = createFeatureSelector<IStateTask>("taskStore");

export const {
     selectTotal,
     selectEntities,
     selectAll,
     selectIds
} = taskAdapter.getSelectors(getStateTask);
