// Imports modules
import { Component } from '@angular/core';

// Imports ngrx-store
import { Store } from '@ngrx/store';

// Imports models
import { IStore } from 'src/app/ngrx-store';

// Import ngrx-actions
import { startLogout } from 'src/app/ngrx-store/auth/auth.actions';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html'
})
export class SettingsPageComponent {
  constructor(
    private store: Store<IStore>
  ) {}

  logout(): void {
    const action = startLogout();
    this.store.dispatch(action);
  }
}
