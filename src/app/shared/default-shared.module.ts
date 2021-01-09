// Imports modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Imports components.
import { NavbarComponent } from "../components/navbar/navbar.component";
import { AuthFormComponent } from '../components/auth-form/auth-form.component';

// Import >> material <<
import { material } from "../material/material";

@NgModule({
  declarations: [
    NavbarComponent,
    AuthFormComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    material
  ],

  exports: [
    NavbarComponent,
    AuthFormComponent,
    material
  ]
})
export class DefaultSharedModule {}
