import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports routing
import { ProfileLayoutRoutingModule } from "./profile-layout-routing.module";

// Import layout
import { ProfileLayoutComponent } from "./profile-layout.component";

// Imports >> Pages <<
import { DashboardPageComponent } from "../../pages/dashboard-page/dashboard-page.component";
import { TaskPageComponent } from "src/app/pages/task-page/task-page.component";
import { SettingsPageComponent } from "src/app/pages/settings-page/settings-page.component";

// Import >> Shared <<
import { ProfileSharedModule } from "../../shared/profile-shared.module";

@NgModule({
  declarations: [
    ProfileLayoutComponent,
    DashboardPageComponent,
    TaskPageComponent,
    SettingsPageComponent
  ],

  imports: [
    CommonModule,
    ProfileLayoutRoutingModule,
    ProfileSharedModule
  ]
})
export class ProfileLayoutModule {}
