// Import modules
import { Component } from '@angular/core';

// Import >> Ngrx-store <<
import { Store } from "@ngrx/store";

// Imports ngrx-actions
import { startQueryTask } from "src/app/ngrx-store/tasks/task.actions";

// Import models
import { IStore } from 'src/app/ngrx-store';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html'
})
export class ProfileLayoutComponent {
  constructor(
    private store: Store<IStore>
  ) {
    this.store.select("authStore").subscribe(data => {
      if (data.user) {
        const action = startQueryTask({ owner: data.user.uid });
        this.store.dispatch(action);
      }
    });
  }

  public openSidebar(): void {
    const element = document.getElementById("sidebar");
    element?.classList.toggle("active");
  }
}
