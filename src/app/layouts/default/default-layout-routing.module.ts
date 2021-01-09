import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";

// Import layout
import { DefaultLayoutComponent } from "./default-layout.component";

// Imports pages
import { HomePageComponent } from "src/app/pages/home-page/home-page.component";
import { LoginPageComponent } from "src/app/pages/login-page/login-page.component";
import { RegisterPageComponent } from "src/app/pages/register-page/register-page.component";

const routes: Route[] = [
  {
    path: "",
    component: DefaultLayoutComponent,
    children: [
      {
        path: "",
        component: HomePageComponent
      },
      {
        path: "login",
        component: LoginPageComponent
      },
      {
        path: "register",
        component: RegisterPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DefaultLayoutRoutingModule {}
