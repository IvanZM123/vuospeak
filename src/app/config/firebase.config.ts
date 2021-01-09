// Imports modules
import { NgModule } from "@angular/core";

// Imports Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";

// Import environments
import { environment } from "src/environments/environment";

// Export module
@NgModule({
     imports: [
          AngularFireModule.initializeApp(environment.firebaseConfig),
          AngularFireAuthModule,
          AngularFirestoreModule
     ]
})
export class FirebaseConfigModule {}
