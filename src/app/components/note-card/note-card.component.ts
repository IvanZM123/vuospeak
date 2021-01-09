// Imports modules
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";

// Import >> Ngrx-store <<
import { Store } from "@ngrx/store";

// Import >> Ngrx-actions <<
import { startUpdateTask, startDeleteTask } from "src/app/ngrx-store/tasks/task.actions";

// Import >> Ngrx-reducer <<
import { IStateTask } from "src/app/ngrx-store/tasks/task.reducer";

// Import models
import { Task } from "src/app/models/Note.models";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarComponent } from "src/app/components/snackbar/snackbar.component";

// Import >> Speech Service <<
import { SpeechRecognitionService } from "src/app/services/speech-recognition/speech-recognition.service";

// Import >> components <<
import { NoteFormComponent } from "src/app/components/note-form/note-form.component";

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html'
})
export class NoteCardComponent implements OnInit {
  @Input() note!: Task;

  constructor(
    private store: Store<{ taskStore: IStateTask }>,
    private speechService: SpeechRecognitionService,
    private noteDialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public completeTask(): void {
    // Update properties task
    let task = Object.assign({}, this.note);
    task.status = !this.note.status;
    task.updated_at = Date.now();

    // Dispatch actions to store
    const action = startUpdateTask({ task });
    this.store.dispatch(action);

    // Show message
    if (task.status) {
      this.showMessage("¡Felicidades, has completado esta tarea!", "check_circle", "bg-success");
    }
  }

  public openDialog(task: Task): void {
    this.noteDialog.open(NoteFormComponent, {
      width: "400px",
      disableClose: true,
      data: Object.assign({}, task)
    });
  }

  public speak(text: string) {
    this.speechService.speak(text);
  }

  public delete(task: Task): void {
    if (confirm(`¿Estas seguro que deseas eliminar ${ task.id }?`)) {
      const action = startDeleteTask({ id: task.id as string });
      this.store.dispatch(action);

      // Show message
      this.showMessage("Su tarea fue removida con exito.", "delete", "bg-danger");
    }
  }

  private showMessage(message: string, icon: string, status: string) {
    // Open snackbar
    this.snackbar.openFromComponent(SnackbarComponent, {
      duration: 5000,
      panelClass: [status],
      data: { icon: icon, text: message }
    });
  }

  public setDate(date: number) {
    return new Date(date);
  }
}
