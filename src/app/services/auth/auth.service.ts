// Imports modules
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

// Import Firebase Auth
import firebase from "firebase/app";
import "firebase/auth";
import { AngularFireAuth } from "@angular/fire/auth";

// Imports models
import { Credentials } from "../../models/Credentials";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User | null>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  /**
   * Responsible for registering the user by email and password.
   * @param credentials 
   */
  public signup(credentials: Credentials): Observable<firebase.auth.UserCredential> {
    const { email, password } = credentials;
    const provider = this.firebaseAuth.createUserWithEmailAndPassword(email, password);
    return from(provider);
  }

  /**
   * Responsible for registering the user by email and password.
   * @param credentials 
   */
  public signin(credentials: Credentials): Observable<firebase.auth.UserCredential> {
    const { email, password } = credentials;
    const provider = this.firebaseAuth.signInWithEmailAndPassword(email, password);
    return from(provider);
  }

  /**
   * Responsible for authenticating the user through a Google account.
   */
  public signInWithGoogle(): Observable<firebase.auth.UserCredential> {
    const google = new firebase.auth.GoogleAuthProvider();
    const popup = this.firebaseAuth.signInWithPopup(google);
    return from(popup);
  }

  /**
   * Responsible for authenticating the user through a Facebook account.
   */
  public signinInWithFacebook(): Observable<firebase.auth.UserCredential> {
    const facebook = new firebase.auth.FacebookAuthProvider();
    const popup = this.firebaseAuth.signInWithPopup(facebook);
    return from(popup);
  }

  /**
   * Responsible for authenticating the user through a Twitter account.
   */
  public signInWithTwitter(): Observable<firebase.auth.UserCredential> {
    const twitter = new firebase.auth.TwitterAuthProvider();
    const popup = this.firebaseAuth.signInWithPopup(twitter);
    return from(popup);
  }

  /**
   * Responsible for closing the user's session.
   */
  public logout(): Observable<void> {
    return from(this.firebaseAuth.signOut());
  }
}
