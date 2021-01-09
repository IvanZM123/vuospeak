// Import modules
import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { switchMap, map, catchError, mergeMap } from "rxjs/operators";
import { of } from "rxjs";

// Import >> Task Actions <<
import * as taskActions from "./task.actions";

// Import >> Note Service <<
import { NoteService } from "src/app/services/notes/note.service";

@Injectable()
export class TaskEffects {

     queryTask$ = createEffect(() => this.actions$.pipe(
          ofType(taskActions.startQueryTask),
          switchMap(payload => this.noteService.get(payload.owner)),
          mergeMap(values => values),
          map(data => {
               if (data.type === "added") {
                    return taskActions.successAddTask({
                         task: {
                              id: data.payload.doc.id,
                              ...data.payload.doc.data() as any
                         }
                    });
               }

               if (data.type === "modified") {
                    return taskActions.successUpdateTask({
                         task: {
                              id: data.payload.doc.id,
                              ...data.payload.doc.data()
                         }
                    });
               }

               if (data.type === "removed") {
                    return taskActions.successDeleteTask({
                         id: data.payload.doc.id
                    });
               }

               return taskActions.successRequest({
                    message: { status: true, text: "" }
               })
          }),
          catchError(error => of(taskActions.failureRequest({
               message: { status: true, text: "Ha ocurrido un error durante la operacion" }
          })))
     ));

     addTask$ = createEffect(() => this.actions$.pipe(
          ofType(taskActions.startAddTask),
          switchMap(payload => this.noteService.insert(payload.task)),
          map(value => (taskActions.successRequest({
               message: { status: true, text: "Se agrego tu tarea con exito." }
          }))),
          catchError(error => of(taskActions.failureRequest({
               message: { status: true, text: "La operacion de insercion ha fallado." }
          })))
     ));

     updateTask$ = createEffect(() => this.actions$.pipe(
          ofType(taskActions.startUpdateTask),
          switchMap(payload => this.noteService.updateOne(payload.task)),
          map(() => (taskActions.successRequest({
               message: { status: true, text: "La tarea ha sido modificada con exito" }
          }))),
          catchError(error => of(taskActions.failureRequest({
               message: { status: true, text: "No se pudo modificar la tarea." }
          })))
     ));

     removeTask$ = createEffect(() => this.actions$.pipe(
          ofType(taskActions.startDeleteTask),
          switchMap(payload => this.noteService.deleteOne(payload.id)),
          map(() => (taskActions.successRequest({
               message: { status: true, text: "" }
          }))),
          catchError(error => of(taskActions.failureRequest({
               message: { status: true, text: "" }
          })))
     ));

     constructor(
          private actions$: Actions,
          private noteService: NoteService
     ) {}
}
