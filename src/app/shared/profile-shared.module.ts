// Imports modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Import >> components <<
import { NoteFormComponent } from "src/app/components/note-form/note-form.component";
import { AlertComponent } from "src/app/components/alert/alert.component";
import { NoteCardComponent } from "src/app/components/note-card/note-card.component";
import { SnackbarComponent } from "src/app/components/snackbar/snackbar.component";
import { CardTimeComponent } from "src/app/components/card-time/card-time.component";
import { NoteStickerComponent } from "src/app/components/note-sticker/note-sticker.component";
import { SectionRecentsComponent } from "src/app/components/section-recents/section-recents.component";
import { WelcomeCardComponent } from "src/app/components/welcome-card/welcome-card.component";

// Import >> material <<
import { material } from "src/app/material/material";

@NgModule({
  declarations: [
    NoteFormComponent,
    AlertComponent,
    NoteCardComponent,
    SnackbarComponent,
    CardTimeComponent,
    NoteStickerComponent,
    SectionRecentsComponent,
    WelcomeCardComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    material
  ],

  exports: [
    NoteFormComponent,
    AlertComponent,
    NoteCardComponent,
    SnackbarComponent,
    CardTimeComponent,
    NoteStickerComponent,
    SectionRecentsComponent,
    WelcomeCardComponent,
    material
  ]
})
export class ProfileSharedModule {}
