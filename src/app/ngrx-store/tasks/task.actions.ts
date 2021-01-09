// Import module
import { createAction, props } from "@ngrx/store";

// Import >> models <<
import { Task } from "src/app/models/Note.models";

// ----------- Query task ---------- //
export const startQueryTask = createAction(
     "[Task/API] Start Query Task",
     props<{ owner: string }>()
);

// ----------- Add new task ---------- //
export const startAddTask = createAction(
     "[Task/API] start added task",
     props<{ task: Task }>()
);

export const successAddTask = createAction(
     "[Task/API] success added task",
     props<{ task: Task }>()
);

// ----------- Update new task ---------- //
export const startUpdateTask = createAction(
     "[Task/API] start update task",
     props<{ task: Task }>()
);

export const successUpdateTask = createAction(
     "[Task/API] success update task",
     props<{ task: Task }>()
);

// ----------- Update new task ---------- //
export const startDeleteTask = createAction(
     "[Task/API] start delete task",
     props<{ id: string }>()
);

export const successDeleteTask = createAction(
     "[Task/API] success delete task",
     props<{ id: string }>()
);

// ----------- Operations results ----------- //
export const successRequest = createAction(
     "[Task/API] Success Request Task",
     props<{ message: { status: boolean; text: string; } }>()
);

export const failureRequest = createAction(
     "[Task/API] Failure Request Task",
     props<{ message: { status: boolean; text: string } }>()
);
