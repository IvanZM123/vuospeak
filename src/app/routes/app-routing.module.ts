// Imports modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("src/app/layouts/default/default-layout.module").then(module => module.DefaultLayoutModule)
  },
  {
    path: "profile",
    loadChildren: () => import("src/app/layouts/profile-layout/profile-layout.module").then(module => module.ProfileLayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
