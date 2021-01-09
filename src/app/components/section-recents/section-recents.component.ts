// Imports modules
import { MatDialog } from "@angular/material/dialog";
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

// Imports components
import { NoteFormComponent } from "src/app/components/note-form/note-form.component";

@Component({
  selector: 'app-section-recents',
  templateUrl: './section-recents.component.html'
})
export class SectionRecentsComponent {
  @Input() tasks!: Observable<any>;

  constructor(
    private dialog: MatDialog
  ) {}

  public openDialog(): void {
    this.dialog.open(NoteFormComponent, {
      width: "400px",
      disableClose: true
    })
  }
}
