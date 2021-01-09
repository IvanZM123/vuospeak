// Import module
import { Route } from "@angular/router";

// Import guards
import { AuthGuard } from "src/app/guards/auth.guard";

// Import >> Layout <<
import { ProfileLayoutComponent } from "src/app/layouts/profile-layout/profile-layout.component";

// Import >> Pages <<
import { DashboardPageComponent } from "src/app/pages/dashboard-page/dashboard-page.component";
import { TaskPageComponent } from "src/app/pages/task-page/task-page.component";
import { SettingsPageComponent } from "src/app/pages/settings-page/settings-page.component";

export const ProfileRoutes: Route = {
     path: "profile",
     component: ProfileLayoutComponent,
     canActivate: [AuthGuard],
     children: [
          {
               path: "",
               canActivate: [AuthGuard],
               component: DashboardPageComponent
          },
          {
               path: "task",
               canActivate: [AuthGuard],
               component: TaskPageComponent
          },
          {
               path: "settings",
               canActivate: [AuthGuard],
               component: SettingsPageComponent
          }
     ]
};
