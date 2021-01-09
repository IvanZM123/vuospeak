// Imports modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Ngrx-store
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, effects } from './ngrx-store';
import { clearState } from "./ngrx-store/auth/auth.meta";

// Import Firebase
import { FirebaseConfigModule } from "src/app/config/firebase.config"

// Import services
import { AuthService } from "./services/auth/auth.service";
import { NoteService } from "./services/notes/note.service";
import { SpeechRecognitionService } from './services/speech-recognition/speech-recognition.service';

// Import routes
import { AppRoutingModule } from './routes/app-routing.module';

// Import main component
import { AppComponent } from './bootstrap/app.component';

// Import layouts
import { DefaultLayoutModule } from "./layouts/default/default-layout.module";
import { ProfileLayoutModule } from "./layouts/profile-layout/profile-layout.module";

@NgModule({
  declarations: [ AppComponent ],

  imports: [
    // Browser
    BrowserModule,

    // Routing
    AppRoutingModule,

    // Firebase
    FirebaseConfigModule,

    // Ngrx-store
    StoreModule.forRoot(reducers, { metaReducers: [clearState] }),

    // Ngrx-effects
    EffectsModule.forRoot(effects),

    // Layouts
    DefaultLayoutModule,
    ProfileLayoutModule,
    BrowserAnimationsModule
  ],

  providers: [
    AuthService,
    NoteService,
    SpeechRecognitionService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
