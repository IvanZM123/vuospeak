// Import >> modules <<
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import >> Ngrx-store <<
import { Store } from "@ngrx/store";

// Import >> Interface reducer <<
import { IStateInitialAuth } from "src/app/ngrx-store/auth/auth.reducer";
import * as fromTaskReducer from "src/app/ngrx-store/tasks/task.reducer";
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ["./dashboard-page.component.css"]
})
export class DashboardPageComponent {
  public tasks!: Observable<any>;
  public user: User = Object.assign({});

  constructor(
    private store: Store<{
      authStore: IStateInitialAuth,
      taskStore: fromTaskReducer.IStateTask
    }>
  ) {
    this.setUser();
    this.setTasks();
  }
  
  setUser(): void {
    this.store.select("authStore").subscribe(data => {
      if (data.user) this.user = data.user;
    });
  }
  
  setTasks(): void {
    this.tasks = this.store.select(fromTaskReducer.selectAll);
  }
}
