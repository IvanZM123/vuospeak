// Import module
import { Route } from "@angular/router";

// Import layout
import { DefaultLayoutComponent } from "../../layouts/default/default-layout.component";

// Imports pages
import { HomePageComponent } from "../../pages/home-page/home-page.component";
import { RegisterPageComponent } from "../../pages/register-page/register-page.component";
import { LoginPageComponent } from "../../pages/login-page/login-page.component";

export const HomeRoutes: Route = {
     path: "",
     component: DefaultLayoutComponent,
     children: [
          {
               path: "",
               component: HomePageComponent
          },
          {
               path: "auth/register",
               component: RegisterPageComponent
          },
          {
               path: "auth/login",
               component: LoginPageComponent
          }
     ]
};
