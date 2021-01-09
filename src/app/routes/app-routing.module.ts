// Imports modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import routes
import { HomeRoutes } from "./home/home.routes";
import { ProfileRoutes } from "./profile/profile.routes";

const routes: Routes = [
  HomeRoutes,
  ProfileRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
