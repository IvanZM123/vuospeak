// Imports modules
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

// Imports Firebase
import { AngularFirestore } from "@angular/fire/firestore";

// Import models
import { Task } from "../../models/Note.models";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(
    private firestore: AngularFirestore
  ) {}

  /**
   * Responsible for obtaining all the notes, as long as the user is the creator.
   * @param owner 
   */
  public get(owner: string) {
    return this.firestore
    .collection<Task>(
      "notes",
      ref => ref.where("owner", "==", owner))
    .stateChanges();
  }

  /**
   * Responsible for adding new notes.
   * @param task 
   */
  public insert(task: Task) {
    const req = this.firestore.collection<Task>("notes").add(task);
    return from(req);
  }

  /**
   * Responsible for updating a note.
   * @param task 
   */
  public updateOne(task: Task) {
    const req = this.firestore.collection("notes").doc(task.id).set(task);
    return from(req);
  }
  
  /**
   * Responsible for deleting a note.
   * @param id 
   */
  public deleteOne(id: string) {
    const req = this.firestore.collection("notes").doc(id).delete();
    return from(req);
  }
}
