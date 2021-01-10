// Import module
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

// Import store
import { Store } from "@ngrx/store";
import { IStateInitialAuth } from "src/app/ngrx-store/auth/auth.reducer";

// Import >> Note service <<
import { SpeechRecognitionService } from "src/app/services/speech-recognition/speech-recognition.service";

// Import >> Note Actions <<
import { startAddTask, startUpdateTask } from "src/app/ngrx-store/tasks/task.actions";

// Import models
import { Task } from "src/app/models/Note.models";
import { User } from 'src/app/models/User';

// Import components
import { SnackbarComponent } from "src/app/components/snackbar/snackbar.component";

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'],
})
export class NoteFormComponent implements OnInit {
  private user!: User | null;
  supported!: boolean;

  constructor(
    private dialogRef: MatDialogRef<NoteFormComponent>,
    private snackbar: MatSnackBar,
    public speechService: SpeechRecognitionService,
    private store: Store<{
      authStore: IStateInitialAuth
    }>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.setSupported();
    this.setUser();
  }

  ngOnInit(): void {
    this.speechService.setBufferContent(this.data?.message || "");

    if (this.data) this.speechService.content = this.data.message
  }

  /**
   * We assign the data to the user.
   */
  private setUser(): void {
    this.store.select("authStore").subscribe(res => {
      this.user = res.user;
    });
  }

  /**
   * Check if the browser supports voice recognition.
   */
  private setSupported(): void {
    this.supported = this.speechService.isSupported();
  }

  /**
   * Save the note
   */
  public saveNote(): boolean {
    !this.data ? this.createTask() : this.updateTask();
    return false;
  }

  /**
   * Add a new note to the collection.
   */
  private createTask(): void {
    if (this.user && this.speechService.content) {
      // Create task
      const newTask = new Task(this.speechService.content, this.user.uid);
      const task = Object.assign({}, newTask);
      
      // Add new task in the firebase
      const action = startAddTask({ task });
      this.store.dispatch(action);

      // Close dialog
      this.close();

      // Show message
      this.showMessage("Se añadio una tarea con exito.", "check_circle", "bg-success");
    }
  }

  /**
   * Update a collection note.
   */
  private updateTask(): void {
    const { content } = this.speechService;
    
    if (content) {
      // Update data
      this.data.updated_at = Date.now();
      this.data.message = content;

      // Dispatch event
      const action = startUpdateTask({ task: this.data });
      this.store.dispatch(action);

      // Close dialog
      this.close();

      // show message
      this.showMessage("Su tarea fue modificada con exito.", "create", "bg-warning");
    }
  }

  /**
   * We turn on the microphone
   */
  enableListening(): void {
    this.speechService.start();
  }

  /**
   * Show a message after saving the note.
   * @param message 
   * @param icon 
   * @param status 
   */
  private showMessage(message: string, icon: string, status: string) {
      this.snackbar.openFromComponent(SnackbarComponent, {
        duration: 5000,
        panelClass: [status],
        data: { icon: icon, text: message }
      });
  }
  
  /**
   * Clean the form and properties.
   */
  close(): void {
    this.dialogRef.close();
    this.speechService.content = "";
    this.speechService.bufferContent = [];
  }
}
