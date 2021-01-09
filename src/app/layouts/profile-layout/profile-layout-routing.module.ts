// Imports modules
import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";

// Imports guards
import { AuthGuard } from 'src/app/guards/auth.guard';

// Import layout
import { ProfileLayoutComponent } from "./profile-layout.component";

// Imports pages
import { DashboardPageComponent } from "src/app/pages/dashboard-page/dashboard-page.component";
import { TaskPageComponent } from "src/app/pages/task-page/task-page.component";
import { SettingsPageComponent } from "src/app/pages/settings-page/settings-page.component";

const routes: Route[] = [
  {
    path: "",
    component: ProfileLayoutComponent,
    
    children: [
      {
        path: "",
        canActivate: [AuthGuard],
        component: DashboardPageComponent
      },

      {
        path: "settings",
        canActivate: [AuthGuard],
        component: SettingsPageComponent
      },

      {
        path: "tasks",
        canActivate: [AuthGuard],
        component: TaskPageComponent
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
export class ProfileLayoutRoutingModule {}
