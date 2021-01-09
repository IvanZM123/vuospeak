// Imports modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

// Import layout
import { DefaultLayoutComponent } from "./default-layout.component";

// Imports pages
import { HomePageComponent } from "../../pages/home-page/home-page.component";
import { LoginPageComponent } from "../../pages/login-page/login-page.component";
import { RegisterPageComponent } from "../../pages/register-page/register-page.component";

// Import shared
import { DefaultSharedModule } from "../../shared/default-shared.module";

@NgModule({
  declarations: [
    DefaultLayoutComponent,
    HomePageComponent,
    RegisterPageComponent,
    LoginPageComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule,
    DefaultSharedModule
  ]
})
export class DefaultLayoutModule {}
